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
  Fade,
  Dialog,
  Link,
  LinearProgress,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@mui/material'
import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch, useSelector, batch } from 'react-redux'
import { getCourse } from '../../../api'
import Course from '../../views/Planning/Course'
import UserContext from '../../../userContext'
import SelectDialog from '../SelectDialog'
import { addCourse, addCourseToSemester, pushSemester } from '../../../store'
import AlertDialog from '../AlertDialog'
import {
  getStartingSemester,
  getPercentageOfCompletion,
  checkPrereqs,
  hasTaken,
} from '../../../utilities'
import AddButton from './AddButton'

// TODO: perhaps move this to a diff place besides common

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
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
  backgroundColor: '#a575286e',
})

const StyledButton = styled(Button)({})

// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => <Fade ref={ref} {...props} />)

const scrollStyles = {
  '&::-webkit-scrollbar': {
    width: 5,
  },

  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '#adadad',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '#919191',
  },

  '& > div:nth-of-type(even)': {
    backgroundColor: '#f0f0f0',
  },
}

function InfoPopup() {
  const { semesters, lastSemester } = useSelector((state) => state.semester)
  const { previousCourses } = useSelector((state) => state.course)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const { showCourseInfo, courseInfo, setShow } = useContext(UserContext)

  // const [showAddDialog, setShowAdd] = useState(false)
  const [semesterToAdd, setSemesterToAdd] = useState('')
  // const [showStatus, setShowStatus] = useState(false)
  // const [addSuccess, setAddSuccess] = useState(false)
  // const [isDupeCourse, setDupeCourse] = useState(false)
  const [percent, setPercent] = useState(0)

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

  useEffect(() => {
    if (!info.prereqs) return
    setPercent(getPercentageOfCompletion(info.prereqs, previousCourses, 100) || 0)
  }, [info, previousCourses])

  // const promptAdd = () => {
  //   if (semesters.length === 0) {
  //     dispatch(pushSemester(getStartingSemester()))
  //     setSemesterToAdd(lastSemester ? lastSemester.title : '')
  //   }
  //   setShowAdd(true)
  //   setSemesterToAdd(lastSemester ? lastSemester.title : '')
  // }

  // const cancelAdd = () => {
  //   setShowAdd(false)
  // }

  // const handleAddChange = (e) => {
  //   setSemesterToAdd(e.target.value)
  // }

  // const addToSemester = () => {
  //   setShowAdd(false)
  //   const chosenSemester = semesters.find((s) => s.title === semesterToAdd)
  //   const dupe = hasTaken(courseInfo, previousCourses)
  //   setDupeCourse(dupe)
  //   if (!dupe && checkPrereqs(info, previousCourses, chosenSemester)) {
  //     batch(() => {
  //       dispatch(
  //         addCourseToSemester({
  //           semesterTitle: semesterToAdd,
  //           course: courseInfo,
  //         })
  //       )
  //       dispatch(addCourse(courseInfo))
  //     })
  //     setAddSuccess(true)
  //   } else {
  //     setAddSuccess(false)
  //   }
  //   setShowStatus(true)
  // }

  // const addCourseToSem = (semesterTitle, course) => {
  //   batch(() => {
  //     dispatch(
  //       addCourseToSemester({
  //         semesterTitle,
  //         course,
  //       })
  //     )
  //     dispatch(addCourse(course))
  //   })
  // }

  return (
    <Dialog
      open={Boolean(showCourseInfo)}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth="lg"
      PaperProps={{ sx: { ...scrollStyles, position: 'fixed', top: '10%' } }}
      fullWidth
    >
      <Box py={4} px={{ xs: 2, md: 5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Link href={info?.url ?? '#'} sx={{ width: '80%' }} target="_blank">
            <Typography variant="h5">
              {courseInfo && courseInfo.subject} {courseInfo && courseInfo.number} -{' '}
              {courseInfo && info.title}
            </Typography>
          </Link>
          {info.credits && (
            <Typography variant="body1">
              {parseFloat(info.credits).toPrecision(3)} Credits
            </Typography>
          )}
        </Stack>
        {loading ? (
          <Stack spacing={1} mt={2}>
            <Skeleton variant="rectangular" width="100%" height={100} />
            <Stack direction="row" spacing={2}>
              <Skeleton variant="text" width="55%" />
              <Skeleton variant="text" width="45%" />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Skeleton variant="text" width="45%" />
              <Skeleton variant="text" width="55%" />
            </Stack>
            <Skeleton variant="text" width="100%" />
          </Stack>
        ) : (
          <Box mt={2}>
            <Box>
              <Typography variant="body2">{info.description}</Typography>
            </Box>

            {info?.prereqs && Boolean(info?.prereqs.value?.length) && (
              <Box mt={3}>
                <StyledAccordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      alignItems: 'center',
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Typography variant="body1">Prerequisites</Typography>
                      <Box
                        sx={{
                          width: '75px',
                          color: () => {
                            if (percent < 50) return '#d32f2f'
                            if (percent < 100) return '#fbc02d'
                            return '#66bb6a'
                          },
                        }}
                      >
                        <LinearProgress variant="determinate" value={percent} color="inherit" />
                      </Box>
                    </Stack>
                  </AccordionSummary>
                  {info && (
                    <Accordion>
                      <AccordionDetails>
                        <Course {...info.prereqs} />
                      </AccordionDetails>
                    </Accordion>
                  )}
                </StyledAccordion>
              </Box>
            )}
            <Stack mt={3} alignItems="center">
              <AddButton courseInfo={info} close={handleClose} />
            </Stack>
          </Box>
        )}
      </Box>
    </Dialog>

    //         <SelectDialog
    //           open={showAddDialog}
    //           onClose={cancelAdd}
    //           onSubmit={addToSemester}
    //           onChange={handleAddChange}
    //           defaultValue={semesterToAdd}
    //           options={semesters.map((semester) => semester.title)}
    //           title={`Add ${courseInfo && `${courseInfo.subject} ${courseInfo.number}`}`}
    //           message="Choose which semester to add course to"
    //           label="Semester"
    //           noOptionsMessage="No semesters created yet!"
    //         />
    //         <AlertDialog
    //           open={showStatus}
    //           onClose={() => setShowStatus(false)}
    //           title={addSuccess ? 'Success' : 'Error'}
    //           message={`${addSuccess ? 'Successfully added' : 'Could not add'} ${
    //             courseInfo && `${courseInfo.subject} ${courseInfo.number}`
    //           } to ${semesterToAdd}. ${isDupeCourse ? 'You have taken this course already!' : ''}
    //               ${!addSuccess ? 'Prerequisites not met!' : ''}`}
    //         />
  )
}

export default InfoPopup
