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
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import PromptDialog from '../../../common/PromptDialog'
import { getStartingSemester, getNextSemester } from '../../../../utilities/semester'
import { pushSemester, popSemester, renameSemester } from '../../../../store/reducers/semester'
import ConfirmDialog from '../../../common/ConfirmDialog'

function Semester({ index, title, courses }) {
  const dispatch = useDispatch()
  const { lastSemester } = useSelector((state) => state.semester)

  const [showRename, setShowRename] = useState(false)
  const [newRename, setNewRename] = useState('')
  const [showDelete, setShowDelete] = useState(false)

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

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5">{title}</Typography>
        <IconButton title="Rename" onClick={promptRename} sx={{ ml: 'auto' }}>
          <EditIcon />
        </IconButton>
        {lastSemester.title === title && (
          <IconButton title="Delete" onClick={promptDelete}>
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
      <Box id="courses" sx={{ textAlign: 'center' }}>
        {courses.length === 0 ? (
          <Typography>No courses</Typography>
        ) : (
          courses.map((course) => (
            <p>
              {course.subject} {course.number}
            </p>
          ))
        )}
      </Box>
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
    </Box>
  )
}

export default Semester
