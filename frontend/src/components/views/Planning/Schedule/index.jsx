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
} from '@mui/material'
import { useSelector, useStore, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import Semester from './Semester'
import PromptDialog from '../../../common/PromptDialog'
import { getStartingSemester, getNextSemester } from '../../../../utilities/semester'
import { pushSemester } from '../../../../store/reducers/semester'

function Schedule() {
  const store = useStore()
  const dispatch = useDispatch()
  const { semesters, lastSemester } = useSelector((state) => state.semester)

  const addNewSemester = () => {
    if (semesters.length === 0) {
      dispatch(pushSemester(getStartingSemester()))
    } else dispatch(pushSemester(getNextSemester(lastSemester.title)))
  }

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Schedule
      </Typography>
      <Box sx={{ backgroundColor: '#000000', padding: 3, mt: 2, borderRadius: 4 }}>
        {semesters.map((semester) => (
          <Semester key={semester.index} {...semester} />
        ))}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="text"
            title="Add semester"
            startIcon={<AddIcon />}
            onClick={addNewSemester}
            sx={{ pl: 1, pr: 1 }}
          >
            Add Semester
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Schedule
