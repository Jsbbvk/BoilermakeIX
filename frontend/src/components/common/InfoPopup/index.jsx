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
} from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import LinkIcon from '@mui/icons-material/Link'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { getCourse } from '../../../api'
import Course from '../../views/Planning/Course'
import UserContext from '../../../userContext'

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
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const [addable, setAddable] = useState(true)
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
      // TODO: check if course is addable to semester (e.g. doesn't exist on schedule, prereqs met)
      setAddable(true)
    }
  }, [courseInfo])

  const handleClose = () => {
    setShow(false)
  }

  return (
    <Modal
      open={showCourseInfo}
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
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            Loading...
          </Typography>
        ) : (
          <>
            <Typography sx={{ mb: 1 }}>
              {' '}
              <strong>Description:</strong> {info.description}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Credits:</strong> {parseFloat(info.credits).toPrecision(3)}
            </Typography>
            {!addable && (
              <Typography sx={{ mb: 1 }} color="red">
                Some prerequisites have not been fufilled yet!
              </Typography>
            )}
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
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                disabled={!addable}
                title="Add to your semester schedule"
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
          </>
        )}
      </Box>
    </Modal>
  )
}

// const mapStateToProps = (state) => ({
//   open: state.course.showCourseInfo,
//   course: state.course.courseSelected,
// })

// const InfoPopupRedux = connect(mapStateToProps)(InfoPopup)

// export default InfoPopupRedux
export default InfoPopup
