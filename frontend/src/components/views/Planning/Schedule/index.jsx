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
import { useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import { ClassNames } from '.pnpm/@emotion+react@11.7.1_@babel+core@7.16.10+react@17.0.2/node_modules/@emotion/react'
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

  const addNewSemester = () => {
    if (semesters.length === 0) {
      dispatch(pushSemester(getStartingSemester()))
    } else dispatch(pushSemester(getNextSemester(lastSemester.title)))
  }

  const handleExportClick = () => {
    exportCsv(previousCourses, semesters, tracks)
  }

  const handleImportClick = async () => {
    const input = document.getElementById('importFileUpload')
    let data = await input.files[0].text()
    const pc = data.substring(0, data.indexOf('\n')).split(',')
    const realPc = []
    let i = 1
    while (i < pc.length) {
      realPc.push({
        subject: pc[i],
        number: pc[i + 1],
      })
      i += 2
    }
    data = data.substring(data.indexOf('\n') + 1)
    let arr = data.substring(0, data.indexOf('\n')).split(',')
    const realSem = []
    let index = 0
    while (arr[0] !== 'tracksSelected') {
      i = 1
      const sem = {
        index,
        title: arr[0],
        courses: [],
      }
      index += 1
      // while (i < arr.length) {
      //   sem.courses.push({
      //     subject: arr[i],
      //     number: arr[i + 1],
      //   })
      //   i += 2
      // }
      realSem.push(sem)
      data = data.substring(data.indexOf('\n') + 1)
      arr = data.substring(0, data.indexOf('\n')).split(',')
      console.log(data)
    }
    // const realTracks = arr.slice(1)
    console.log(realPc, realSem)
  }

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Schedule
      </Typography>
      {/* <Box sx={{ backgroundColor: '#000000', padding: 3, mt: 2, borderRadius: 4 }}> */}
      <Box sx={{ mt: 4, pl: 3, pr: 3 }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
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
              {/* <input id="importFileUpload" type="file" hidden onChange={handleImportClick} /> */}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Schedule
