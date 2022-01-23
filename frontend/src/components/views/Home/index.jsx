import {
  Typography,
  Container,
  Box,
  Chip,
  styled,
  TextField,
  Autocomplete,
  Button,
  Stack,
  Fade,
} from '@mui/material'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Planning from '../Planning'
import { setTracks, addCourse, removeCourse } from '../../../store'
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
  transition: 'transform 250ms ease, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

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
  const degreeRef = useRef(null)

  const { previousCourses } = useSelector((state) => state.course)

  const [selectedTracks, setSelectedTracks] = useState([])
  const [courseValue, setCourseValue] = useState(null)
  const [courseInputValue, setCourseInputValue] = useState('')

  const [showPlanning, setShowPlanning] = useState(false)

  const onTrackSelect = (track) => {
    setSelectedTracks((p) =>
      p.find((t) => t === track) ? p.filter((t) => t !== track) : [...p, track]
    )
  }

  useEffect(() => {
    dispatch(setTracks(selectedTracks))
  }, [selectedTracks, dispatch])

  const onCourseChange = (_, course, details) => {
    if (details !== 'selectOption') return

    setCourseInputValue('')
    setCourseValue(null)
    dispatch(
      addCourse({
        subject: course.split(' ')[0],
        number: parseInt(course.split(' ')[1].slice(0, -1)),
        title: course.substring(course.indexOf(':') + 2),
      })
    )
  }

  const onCourseDelete = (course) => {
    dispatch(
      removeCourse({
        subject: course.split(' ')[0],
        number: parseInt(course.split(' ')[1].slice(0, -1)),
        title: course.substring(course.indexOf(':')),
      })
    )
  }

  const doScrolling = (elementY, duration) => {
    const startingY = window.pageYOffset
    const diff = elementY - startingY
    let start

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp
      const time = timestamp - start
      const percent = Math.min(time / duration, 1)

      window.scrollTo(0, startingY + diff * percent)

      if (time < duration) {
        window.requestAnimationFrame(step)
      }
    })
  }

  const onStartPlanning = () => {
    setShowPlanning(true)

    if (degreeRef.current) doScrolling(degreeRef.current.getBoundingClientRect().top, 250)
  }

  useEffect(() => {
    if (showPlanning) doScrolling(degreeRef.current.getBoundingClientRect().top, 400)
  }, [showPlanning])

  const buildCourse = ({ subject, number, title }) => `${subject} ${number}: ${title}`

  return (
    <Container sx={{ py: 7 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Stack direction="row" justifyContent="center">
          <img src="/logo.png" width="90px" alt="logo" />
          <Typography variant="h2">lanner</Typography>
        </Stack>
        <Box mt={5}>
          <Typography variant="h6">Select CS Tracks 💻</Typography>
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
          <Typography variant="h6">Enter Previous/Current Courses 📚</Typography>
          <Stack alignItems="center">
            <Autocomplete
              disablePortal
              blurOnSelect
              value={courseValue}
              inputValue={courseInputValue}
              onInputChange={(_, course) => setCourseInputValue(course || '')}
              options={COURSE_NAMES.filter(
                (course) => !previousCourses.find((c) => buildCourse(c) === course)
              )}
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
                  label="Search by course name or number"
                  variant="standard"
                />
              )}
            />
          </Stack>
          {Boolean(previousCourses?.length) && (
            <Box mt={3}>
              {previousCourses?.map((courseObj) => {
                const course = buildCourse(courseObj)
                return (
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
                )
              })}
            </Box>
          )}
        </Box>
        <Box mt={10}>
          <StyledButton onClick={onStartPlanning}>Start Planning! 📝</StyledButton>
        </Box>
      </Box>
      <Fade in={showPlanning}>
        <Box ref={degreeRef} sx={{ mt: 30, ...(!showPlanning && { display: 'none' }) }}>
          <Planning />
        </Box>
      </Fade>
    </Container>
  )
}

export default Home
