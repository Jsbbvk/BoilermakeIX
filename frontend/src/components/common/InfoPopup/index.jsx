import {
  Typography,
  Accordion,
  Box,
  Chip,
  styled,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Button,
  Modal,
  Skeleton,
  Stack,
} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import LinkIcon from '@mui/icons-material/Link'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch, useSelector, batch } from 'react-redux'
import { getCourse } from '../../../api'
import Course from '../../views/Planning/Course'
import UserContext from '../../../userContext'
import SelectDialog from '../SelectDialog'
import { addCourse, addCourseToSemester, pushSemester } from '../../../store'
import AlertDialog from '../AlertDialog'
import { checkPrereqs, hasTaken } from '../../../utilities/course'
import { getStartingSemester } from '../../../utilities/semester'

// TODO: perhaps move this to a diff place besides common

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  outline: 'none',
  p: 4,
  borderRadius: 5,
  maxHeight: 400,
  overflowY: 'auto',
}

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#dba8574f',
})

const StyledChip = styled(Chip)({
  margin: 6,
})

function InfoPopup() {
  const { semesters, lastSemester } = useSelector((state) => state.semester)
  const { previousCourses } = useSelector((state) => state.course)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const { showCourseInfo, courseInfo, setShow } = useContext(UserContext)

  useEffect(() => {
    async function getCourseFetch() {
      const res = await getCourse(courseInfo.subject, courseInfo.number)
      if (res !== null) {
        setInfo(res)
        setLoading(false)
      }
    }
    if (courseInfo) {
      setLoading(true)
      getCourseFetch()
    }
  }, [courseInfo])

  const handleClose = () => {
    setShow(false)
  }

  const [showAddDialog, setShowAdd] = useState(false)
  const [semesterToAdd, setSemesterToAdd] = useState('')
  const [showStatus, setShowStatus] = useState(false)
  const [addSuccess, setAddSuccess] = useState(false)
  const [isDupeCourse, setDupeCourse] = useState(false)

  const promptAdd = () => {
    if (semesters.length === 0) {
      dispatch(pushSemester(getStartingSemester()))
      setSemesterToAdd(lastSemester ? lastSemester.title : '')
    }
    setShowAdd(true)
    setSemesterToAdd(lastSemester ? lastSemester.title : '')
  }

  const cancelAdd = () => {
    setShowAdd(false)
  }

  const handleAddChange = (e) => {
    setSemesterToAdd(e.target.value)
  }

  const addToSemester = () => {
    setShowAdd(false)
    const chosenSemester = semesters.find((s) => s.title === semesterToAdd)
    const dupe = hasTaken(courseInfo, previousCourses)
    setDupeCourse(dupe)
    if (!dupe && checkPrereqs(info, previousCourses, chosenSemester)) {
      batch(() => {
        dispatch(
          addCourseToSemester({
            semesterTitle: semesterToAdd,
            course: courseInfo,
          })
        )
        dispatch(addCourse(courseInfo))
      })
      setAddSuccess(true)
    } else {
      setAddSuccess(false)
    }
    setShowStatus(true)
  }

  return (
    <Modal
      open={showCourseInfo ?? false}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton
          title="Close"
          sx={{ position: 'absolute', right: 4, top: 4 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {courseInfo && courseInfo.subject} {courseInfo && courseInfo.number} -{' '}
          {courseInfo && info.title}
        </Typography>
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width="100%" height={60} />
            <Box sx={{ display: 'flex', mt: 0, mb: 0 }}>
              <Skeleton variant="text" width="55%" />
              <Skeleton variant="text" width="45%" sx={{ ml: 2 }} />
            </Box>
            <Skeleton variant="text" width="100%" />
          </Stack>
        ) : (
          <>
            <Typography sx={{ mb: 1 }}>
              {' '}
              <strong>Description:</strong> {info.description}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Credits:</strong> {parseFloat(info.credits).toPrecision(3)}
            </Typography>
            {/* <Typography sx={{ mb: 1 }} color="red">
              Some prerequisites have not been fufilled yet!
            </Typography> */}
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Typography fontWeight="bold">View Prerequisites</Typography>
              </AccordionSummary>
              {info && (
                <Accordion>
                  <AccordionDetails>
                    <Course {...info.prereqs} />
                  </AccordionDetails>
                </Accordion>
              )}
            </StyledAccordion>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                // disabled={!addable}
                title="Add to your semester schedule"
                onClick={promptAdd}
              >
                Add to Schedule
              </Button>
              <Button
                sx={{ ml: 1 }}
                variant="contained"
                startIcon={<LinkIcon />}
                title="View webpage"
                onClick={() => window.open(info.url)}
              >
                View webpage
              </Button>
            </Box>
            <SelectDialog
              open={showAddDialog}
              onClose={cancelAdd}
              onSubmit={addToSemester}
              onChange={handleAddChange}
              defaultValue={semesterToAdd}
              options={semesters.map((semester) => semester.title)}
              title={`Add ${courseInfo && `${courseInfo.subject} ${courseInfo.number}`}`}
              message="Choose which semester to add course to"
              label="Semester"
              noOptionsMessage="No semesters created yet!"
            />
            <AlertDialog
              open={showStatus}
              onClose={() => {
                setShowStatus(false)
                if (addSuccess) setShow(false)
              }}
              title={addSuccess ? 'Success' : 'Error'}
              message={`${addSuccess ? 'Successfully added' : 'Could not add'} ${
                courseInfo && `${courseInfo.subject} ${courseInfo.number}`
              } to ${semesterToAdd}. ${isDupeCourse ? 'You have taken this course already!' : ''}
                  ${!addSuccess ? 'Prerequisites not met!' : ''}`}
            />
            {/* TODO: auto generate semester? */}
          </>
        )}
      </Box>
    </Modal>
  )
}

export default InfoPopup
