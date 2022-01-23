import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  styled,
  Chip,
  Button,
  IconButton,
} from '@mui/material'
import { useSelector, useStore, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Close'
import { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PromptDialog from '../../../common/PromptDialog'
import { getStartingSemester, getNextSemester } from '../../../../utilities/semester'
import {
  pushSemester,
  popSemester,
  renameSemester,
  removeCourseFromSemester,
} from '../../../../store/reducers/semester'
import ConfirmDialog from '../../../common/ConfirmDialog'
import UserContext from '../../../../userContext'

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#dba8574f',
  marginBottom: 10,
})

function Semester({ index, title, courses }) {
  const dispatch = useDispatch()
  const { lastSemester } = useSelector((state) => state.semester)

  const { setShow, setCourse } = useContext(UserContext)

  const [showRename, setShowRename] = useState(false)
  const [newRename, setNewRename] = useState('')
  const [showDelete, setShowDelete] = useState(false)

  const [selectedCourse, setSelectedCourse] = useState(null)
  const [showDeleteCourse, setShowDeleteCourse] = useState(false)

  const promptRename = () => {
    setShowRename(true)
    setNewRename(title)
  }

  const cancelRename = () => {
    setShowRename(false)
  }

  const handleChangeRename = (e) => {
    setNewRename(e.target.value)
  }

  const renameSem = () => {
    dispatch(
      renameSemester({
        title,
        newTitle: newRename,
      })
    )
    setShowRename(false)
  }

  const promptDelete = () => {
    setShowDelete(true)
  }

  const cancelDelete = () => {
    setShowDelete(false)
  }

  const deleteSem = () => {
    setShowDelete(false)
    dispatch(popSemester())
  }

  const courseClick = (subject, number) => {
    setShow(true)
    setCourse({ subject, number })
  }

  const promptDeleteCourse = (course) => {
    setShowDeleteCourse(true)
    setSelectedCourse(course)
  }

  const cancelDeleteCourse = () => {
    setShowDeleteCourse(false)
  }

  const deleteCourse = () => {
    dispatch(
      removeCourseFromSemester({
        semesterTitle: title,
        course: selectedCourse,
      })
    )
    setShowDeleteCourse(false)
  }

  return (
    <Box>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">{title}</Typography>
          <IconButton title="Rename" onClick={promptRename} sx={{ ml: 'auto' }}>
            <EditIcon />
          </IconButton>
          {lastSemester && lastSemester.title === title && (
            <IconButton title="Delete semester" onClick={promptDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: 'black' }}>
          {courses.length === 0 ? (
            <Typography sx={{ fontStyle: 'italic', padding: 1 }}>No courses</Typography>
          ) : (
            courses.map((course, i) => (
              <Box key={i} sx={{ padding: 1, display: 'flex', alignItems: 'center' }}>
                <Typography
                  onClick={() => courseClick(course.subject, course.number)}
                  sx={{ cursor: 'pointer' }}
                >
                  {course.subject} {course.number}
                </Typography>
                <IconButton
                  title="Remove course"
                  sx={{ ml: 'auto' }}
                  onClick={() => promptDeleteCourse(course)}
                >
                  <RemoveIcon />
                </IconButton>
              </Box>
            ))
          )}
        </AccordionDetails>
      </StyledAccordion>
      <PromptDialog
        open={showRename}
        defaultValue={title}
        onClose={cancelRename}
        onChange={handleChangeRename}
        onSubmit={renameSem}
        title={`Rename "${title}"`}
        message="Enter new semester name"
      />
      <ConfirmDialog
        open={showDelete}
        onClose={cancelDelete}
        onSubmit={deleteSem}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${title}"?`}
      />
      <ConfirmDialog
        open={showDeleteCourse}
        onClose={cancelDeleteCourse}
        onSubmit={deleteCourse}
        title="Confirm Deletion"
        message={`Are you sure you want to delete "${selectedCourse && selectedCourse.subject} ${
          selectedCourse && selectedCourse.number
        }"?`}
      />
    </Box>
  )
}

export default Semester
