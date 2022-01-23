import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  Chip,
  Stack,
  LinearProgress,
  Grid,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import { useCallback, useEffect, useMemo, memo, createContext, useState } from 'react'
import Course from './Course'
import UCORE from '../../../constants/ucore'
import MAJOR from '../../../constants/major'
import TRACKS_JSON from '../../../constants/tracks'
import CourseModal from './CourseModal'
import { coursesInList, getPercentageOfCompletion } from '../../../utilities'
import Schedule from './Schedule'
import CourseSearch from './CourseSearch'

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#dba8574f',
})

const StyledChip = styled(Chip)({
  cursor: 'pointer',
  margin: 4,
  maxWidth: 300,
  fontSize: '0.7em',
})

const COLORS = [
  '#0d47a1',
  '#bf360c',
  '#546e7a',
  '#2e7d32',
  '#6d4c41',
  '#01579b',
  '#b71c1c',
  '#00695c',
  '#512da8',
  '#c2185b',
  '#7b1fa2',
  '#4e342e',
  '#616161',
  '#dd2c00',
  '#37474f',
  '#33691e',
]

export const DegreeProgressContext = createContext({
  setCurriculumProgress: () => {},
})

const Planning = memo(() => {
  const { previousCourses } = useSelector((state) => state.course)
  const { tracks } = useSelector((state) => state.track)
  const [curriculumProgress, setCurriculumProgress] = useState({})
  const [TRACKS, setTRACKS] = useState(TRACKS_JSON)
  const [overallPercent, setOverallPercent] = useState(0)
  const [sectionPercent, setSectionPercent] = useState(0)

  const degreeProgress = useMemo(
    () => ({
      setProgress: (curriculum, percentage) => {
        setCurriculumProgress((prev) => ({
          ...prev,
          [curriculum]: Math.min(100, (prev[curriculum] || 0) + percentage),
        }))
      },
    }),
    []
  )

  useEffect(() => {
    setTRACKS(Object.values(TRACKS_JSON).filter((c) => tracks.includes(c.title)))
  }, [tracks])

  useEffect(() => {
    const curriculumCore = Object.values(UCORE).map((c) => c.title)
    const curriculumMajor = Object.values(MAJOR).map((c) => c.title)
    const curriculumTrack = Object.values(TRACKS).map((c) => c.title)

    const getPercentageTotal = (keys) =>
      Math.min(
        100,
        Math.round(
          keys.reduce((prev, title) => prev + (curriculumProgress[title] || 0), 0) / keys.length
        )
      )

    const coreP = getPercentageTotal(curriculumCore) || 0
    const majorP = getPercentageTotal(curriculumMajor) || 0
    const trackP = getPercentageTotal(curriculumTrack) || 0
    setSectionPercent({
      'University Core Curriculum': coreP,
      'Major Requirements': majorP,
      'Track Requirements': trackP,
    })
    setOverallPercent(Math.min(100, Math.round((coreP + majorP + trackP) / 3)))
  }, [TRACKS, curriculumProgress])

  useEffect(() => {
    setCurriculumProgress((prev) => ({
      ...prev,
      ...Object.values(UCORE).reduce(
        (p, curriculum) => ({
          ...p,
          [curriculum.title]: getPercentageOfCompletion(curriculum, previousCourses, 100),
        }),
        {}
      ),
      ...Object.values(MAJOR).reduce(
        (p, curriculum) => ({
          ...p,
          [curriculum.title]: getPercentageOfCompletion(curriculum, previousCourses, 100),
        }),
        {}
      ),
      ...Object.values(TRACKS).reduce(
        (p, curriculum) => ({
          ...p,
          [curriculum.title]: getPercentageOfCompletion(curriculum, previousCourses, 100),
        }),
        {}
      ),
    }))
  }, [TRACKS, previousCourses])

  const colorMap = useMemo(() => new Map(), [])

  const getBadges = useCallback(
    (curriculum, prevCourses) =>
      coursesInList(curriculum, prevCourses)
        .filter(
          (course, i, self) =>
            i === self.findIndex((c) => c.subject === course.subject && c.number === course.number)
        )
        .sort((a, b) => {
          if (a.subject === b.subject) return a.number - b.number
          return a.subject - b.subject
        })
        .map((course) => {
          if (!colorMap.get(`${course.subject} ${course.number}`)) {
            colorMap.set(
              `${course.subject} ${course.number}`,
              COLORS[colorMap.size % COLORS.length]
            )
          }

          return (
            <StyledChip
              key={`${course.subject} ${course.number}`}
              label={`${course.subject} ${course.number}`}
              size="small"
              sx={{
                backgroundColor: colorMap.get(`${course.subject} ${course.number}`),
              }}
            />
          )
        }),
    [colorMap]
  )

  const displayCurriculums = useCallback(
    (curriculumJSON, title) => (
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            alignItems: 'center',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h6">{title}</Typography>
            <Box
              sx={{
                width: '75px',
                color: () => {
                  const percent = sectionPercent[title]
                  if (percent < 50) return '#d32f2f'
                  if (percent < 100) return '#fbc02d'
                  return '#66bb6a'
                },
              }}
            >
              <LinearProgress
                variant="determinate"
                value={sectionPercent[title] || 0}
                color="inherit"
              />
            </Box>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {Object.values(curriculumJSON).map((curriculum) => (
            <Accordion key={curriculum.title}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h6">{curriculum.title}</Typography>
                  <Box
                    sx={{
                      width: '75px',
                      color: () => {
                        const percent = curriculumProgress[curriculum.title] || 0
                        if (percent < 50) return '#d32f2f'
                        if (percent < 100) return '#fbc02d'
                        return '#66bb6a'
                      },
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      value={curriculumProgress[curriculum.title] || 0}
                      color="inherit"
                    />
                  </Box>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                {curriculum.size === 'large' ? (
                  <CourseModal curriculum={curriculum} />
                ) : (
                  <Course {...curriculum} />
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </StyledAccordion>
    ),
    [curriculumProgress, sectionPercent]
  )

  return (
    <DegreeProgressContext.Provider value={degreeProgress}>
      <Grid
        container
        spacing={1}
        direction={{ xs: 'column-reverse', md: 'row' }}
        justifyContent="center"
      >
        <Grid item xs={12} md={8}>
          <Box>
            <Stack alignItems="center" spacing={2}>
              <Typography variant="h3" sx={{ textAlign: 'center' }}>
                Degree Plan 🎓
              </Typography>
              <Box
                sx={{
                  width: '150px',
                  color: () => {
                    const percent = overallPercent || 0
                    if (percent < 50) return '#d32f2f'
                    if (percent < 100) return '#fbc02d'
                    return '#66bb6a'
                  },
                }}
              >
                <LinearProgress variant="determinate" value={overallPercent || 0} color="inherit" />
              </Box>
              <Box mt={3} mb={2}>
                <CourseSearch />
              </Box>
            </Stack>
            <Box mt={4}>
              {displayCurriculums(UCORE, 'University Core Curriculum')}
              {displayCurriculums(MAJOR, 'Major Requirements')}

              <StyledAccordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="h6">Track Requirements</Typography>
                    <Box
                      sx={{
                        width: '75px',
                        color: () => {
                          const percent = sectionPercent['Track Requirements'] || 0
                          if (percent < 50) return '#d32f2f'
                          if (percent < 100) return '#fbc02d'
                          return '#66bb6a'
                        },
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        value={sectionPercent['Track Requirements'] || 0}
                        color="inherit"
                      />
                    </Box>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  {Object.values(TRACKS).map((curriculum) => (
                    <Accordion key={curriculum.title}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          alignItems: 'center',
                        }}
                      >
                        <Box>
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Typography variant="h6">{curriculum.title}</Typography>
                            <Box
                              sx={{
                                width: '75px',
                                color: () => {
                                  const percent = Math.round(
                                    curriculumProgress[curriculum.title] / curriculum.value.length
                                  )
                                  if (percent < 50) return '#d32f2f'
                                  if (percent < 100) return '#fbc02d'
                                  return '#66bb6a'
                                },
                              }}
                            >
                              <LinearProgress
                                variant="determinate"
                                value={Math.round(
                                  curriculumProgress[curriculum.title] / curriculum.value.length
                                )}
                                color="inherit"
                              />
                            </Box>
                          </Stack>
                          <Box>{getBadges(curriculum, previousCourses)}</Box>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Course {...curriculum} />
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </StyledAccordion>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Schedule />
        </Grid>
      </Grid>
    </DegreeProgressContext.Provider>
  )
})

export default Planning
