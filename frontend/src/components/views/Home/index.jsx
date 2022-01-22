import {
  Typography,
  Container,
  Box,
  Chip,
  styled,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Autocomplete,
  Button,
  Stack,
  Fade,
} from '@mui/material'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Planning from '../Planning'
import { setCourses } from '../../../store'
import COURSES from '../../../constants/allcourses.json'

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'disableHover',
})(({ selected, disableHover }) => ({
  margin: 6,
  cursor: 'pointer',
  backgroundColor: selected ? '#dba857d6' : '#dba8574f',
  ...(!disableHover && {
    '&:hover': {
      backgroundColor: selected ? '#dba857d6' : '#dba857d6',
    },
  }),
}))

const StyledButton = styled(Button)({
  backgroundColor: '#dba857d6',
  color: '#fff',
  textTransform: 'none',
  borderRadius: 40,
  padding: '18px 28px',
  fontSize: '1.5rem',
  transition: 'transform 250ms ease',

  '&:hover': {
    backgroundColor: '#dba857f4',
  },

  '&:active': {
    transform: 'scale(0.94)',
  },
})

const TRACKS = [
  'Computational Science and Engineering Track',
  'Computer Graphics and Visualization Track',
  'Database and Information Systems Track',
  '(Algorithmic) Foundations Track',
  'Machine Intelligence Track',
  'Programming Language Track',
  'Security Track',
  'Software Engineering Track',
  'Systems Software Track',
]

const COURSE_NAMES = COURSES.map((course) => `${course.course_id}: ${course.title}`)

function Home() {
  const dispatch = useDispatch()

  const [selectedTracks, setSelectedTracks] = useState([])
  const [selectedCourses, setSelectedCourses] = useState([])
  const [courseValue, setCourseValue] = useState(null)
  const [courseInputValue, setCourseInputValue] = useState('')

  const [showPlanning, setShowPlanning] = useState(false)

  const onTrackSelect = (track) => {
    setSelectedTracks((p) =>
      p.find((t) => t === track) ? p.filter((t) => t !== track) : [...p, track]
    )
  }

  const onCourseChange = (_, course, details) => {
    if (details !== 'selectOption') return
    setCourseInputValue('')
    setCourseValue(null)
    setSelectedCourses((p) => [...p, course])
  }

  const onCourseDelete = (course) => {
    setSelectedCourses((p) => p.filter((c) => c !== course))
  }

  const onStartPlanning = () => {
    dispatch(
      setCourses(
        selectedCourses.map((course) => ({
          subject: course.split(' ')[0],
          number: parseInt(course.split(' ')[1].slice(0, -1)),
        }))
      )
    )
    setShowPlanning(true)
  }

  return (
    <Container sx={{ py: 7 }}>
      <Box sx={{ textAlign: 'center', mb: 30 }}>
        <Typography variant="h2">&#127345;️lanner</Typography>
        <Box mt={5}>
          <Typography variant="h6">Select CS Tracks</Typography>
          <Box mt={1}>
            {TRACKS.map((track) => (
              <StyledChip
                key={track}
                label={track}
                onClick={() => onTrackSelect(track)}
                selected={selectedTracks.find((t) => t === track)}
              />
            ))}
          </Box>
        </Box>
        <Box mt={6}>
          <Typography variant="h6">Enter Previous/Current Courses</Typography>
          <Stack alignItems="center">
            <Autocomplete
              disablePortal
              blurOnSelect
              value={courseValue}
              inputValue={courseInputValue}
              onInputChange={(_, course) => setCourseInputValue(course || '')}
              options={COURSE_NAMES.filter((course) => !selectedCourses.includes(course))}
              onChange={onCourseChange}
              ListboxProps={{
                sx: {
                  '& > li': {
                    whiteSpace: 'nowrap !important',
                    overflow: 'hidden !important',
                    textOverflow: 'ellipsis !important',
                    display: 'block !important',
                    textAlign: 'left !important',
                  },
                },
              }}
              sx={{
                width: '500px',
                maxWidth: '90vw',
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  autoComplete="off"
                  label="Course Name/Number"
                  variant="standard"
                />
              )}
            />
          </Stack>
          {Boolean(selectedCourses?.length) && (
            <Box mt={3}>
              {/* TODO cool transition */}
              {selectedCourses.map((course) => (
                <StyledChip
                  key={course}
                  label={course}
                  onDelete={() => onCourseDelete(course)}
                  disableHover
                  sx={{
                    backgroundColor: '#dba857d6',
                    '& > .MuiChip-label': {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: 'min(80vw, 400px)',
                    },
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box mt={26}>
          <StyledButton onClick={onStartPlanning}>Start Planning!</StyledButton>
        </Box>
      </Box>
      <Fade in unmountOnExit>
        {/* TODO scroll to planning */}
        <Box>
          <Planning />
        </Box>
      </Fade>
    </Container>
  )
}

export default Home
