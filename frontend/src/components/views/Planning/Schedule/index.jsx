import { Box, Typography, styled, Button, IconButton } from '@mui/material'
import { useSelector, useDispatch, batch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { useEffect } from 'react'
import DownloadIcon from '@mui/icons-material/Download'
import UploadIcon from '@mui/icons-material/Upload'
import Semester from './Semester'
import { getStartingSemester, getNextSemester } from '../../../../utilities/semester'
import { pushSemester } from '../../../../store/reducers/semester'
import { exportCsv } from '../../../../utilities/save'
import { setCourse, setSemesters, setTracks } from '../../../../store'

const StyledButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '24px',
  padding: '10px 20px',
  margin: '0 10px',
  backgroundColor: '#3b3b3b',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 250ms ease',
  color: 'white',

  '&:hover': {
    backgroundColor: '#474747',
  },

  '&:active': {
    transform: 'scale(0.96)',
  },
})

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

  const importCsv = async () => {
    const input = document.getElementById('importFileUpload')
    let data = await input.files[0].text()
    const pc = data.substring(0, data.indexOf('\n')).split(',')
    const realPc = []
    let i = 1
    while (i < pc.length - 1) {
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
      while (i < arr.length - 1) {
        sem.courses.push({
          subject: arr[i],
          number: arr[i + 1],
        })
        i += 2
      }
      realSem.push(sem)
      data = data.substring(data.indexOf('\n') + 1)
      arr = data.substring(0, data.indexOf('\n')).split(',')
    }
    let realTracks = arr.slice(1)
    if (realTracks[0] === '') realTracks = []
    batch(() => {
      dispatch(setCourse(realPc))
      dispatch(setSemesters(realSem))
      dispatch(setTracks(realTracks))
    })
  }

  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Schedule 📅
      </Typography>
      <Box sx={{ mt: 3, px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <StyledButton
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleExportClick}
          >
            Export
          </StyledButton>
          <StyledButton variant="contained" startIcon={<UploadIcon />} component="label">
            Import
            <input id="importFileUpload" type="file" hidden onChange={importCsv} />{' '}
          </StyledButton>
        </Box>
        <Box>
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
        </Box>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <IconButton
            variant="text"
            title="Add semester"
            onClick={addNewSemester}
            size="small"
            sx={{
              backgroundColor: '#383838',
              '&:hover': {
                backgroundColor: '#404040',
              },
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Schedule
