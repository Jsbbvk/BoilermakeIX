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
import { useEffect, useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import Semester from './Semester'
import PromptDialog from '../../../common/PromptDialog'
import { getStartingSemester, getNextSemester } from '../../../../utilities/semester'
import { pushSemester } from '../../../../store/reducers/semester'
import { exportCsv, exportJson, importJson } from '../../../../utilities/save'

function Schedule() {
  const dispatch = useDispatch()
  const { semesters, lastSemester } = useSelector((state) => state.semester)
  const { previousCourses } = useSelector((state) => state.course)
  const { tracks } = useSelector((state) => state.track)

  useEffect(() => {
    // Adds in starting semester
    if (semesters.length === 0) dispatch(pushSemester(getStartingSemester()))
  }, [dispatch, semesters])

  const addNewSemester = () => {
    if (semesters.length === 0) {
      dispatch(pushSemester(getStartingSemester()))
    } else dispatch(pushSemester(getNextSemester(lastSemester.title)))
  }

  const handleExportClick = () => {
    exportCsv(previousCourses, semesters, tracks)
  }

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Schedule
      </Typography>
      <Box sx={{ mt: 4, pl: 3, pr: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleExportClick}
          >
            Export
          </Button>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            startIcon={<UploadIcon />}
            component="label"
          >
            Import
          </Button>
        </Box>
        {semesters.length === 0 ? (
          <Typography
            variant="h6"
            sx={{ mb: 2, fontStyle: 'italic', width: '100%', textAlign: 'center' }}
          >
            No semesters yet
          </Typography>
        ) : (
          semesters.map((semester) => <Semester key={semester.index} {...semester} />)
        )}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="text"
            title="Add semester"
            startIcon={<AddIcon />}
            onClick={addNewSemester}
            sx={{ mt: 1, pl: 1, pr: 1 }}
          >
            Add Semester
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Schedule
