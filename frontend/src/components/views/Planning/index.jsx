/* eslint-disable import/no-cycle */
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  styled,
  Chip,
  Stack,
  LinearProgress,
  Grid,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector, useDispatch } from 'react-redux'
import { useCallback, useEffect, useMemo, memo, useContext, createContext, useState } from 'react'
import Course from './Course'
import UCORE from '../../../constants/ucore'
import MAJOR from '../../../constants/major'
import TRACKS from '../../../constants/tracks'
import CourseModal from './CourseModal'
import { coursesInList } from '../../../utilities'
import Schedule from './Schedule'

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
  const [curriculumProgress, setCurriculumProgress] = useState({})

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

  // useEffect(() => {
  //   console.log(curriculumProgress)
  // }, [curriculumProgress])

  const colorMap = useMemo(() => new Map(), [])

  const getBadges = useCallback(
    (curriculum, prevCourses) =>
      coursesInList(curriculum, prevCourses)
        .filter(
          (course, i, self) =>
            i === self.findIndex((c) => c.subject === course.subject && c.number === course.number)
        )
        .sort((a, b) => {
          // console.log('sorting')
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
          <Typography variant="h6">{title}</Typography>
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
                <Typography variant="h6">{curriculum.title}</Typography>
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
    []
  )

  return (
    <DegreeProgressContext.Provider value={degreeProgress}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Degree Plan
            </Typography>
            <Box mt={4}>
              {displayCurriculums(UCORE, 'University Core Curriculum')}
              {displayCurriculums(MAJOR, 'Major Requirements')}

              {/* TODO render in selected tracks */}
              <StyledAccordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="h6">Track Requirements</Typography>
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
        <Grid item xs={4}>
          <Schedule />
        </Grid>
      </Grid>
    </DegreeProgressContext.Provider>
  )
})

export default Planning
