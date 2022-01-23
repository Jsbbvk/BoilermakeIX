import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  Chip,
  IconButton,
  Grid,
  Grow,
} from '@mui/material'
import { useSelector, useDispatch, batch } from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove'
import { useContext, useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { popSemester, removeCourseFromSemester } from '../../../../store/reducers/semester'
import UserContext from '../../../../userContext'

import { removeCourse, removeCourses } from '../../../../store'

const StyledChip = styled(Chip)({
  margin: 6,
  cursor: 'pointer',
  backgroundColor: '#dba857d6',
  '&:hover': {
    backgroundColor: '#dba857f4',
  },
})

function Semester({ title, courses }) {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(true)

  const { lastSemester, semesters } = useSelector((state) => state.semester)

  const { setShow, setCourse } = useContext(UserContext)

  const deleteSem = () => {
    const { courses: coursesToRemove } = semesters[lastSemester.index]
    batch(() => {
      dispatch(removeCourses({ coursesToRemove }))
      dispatch(popSemester())
    })
  }

  const courseClick = (course) => {
    setShow(true)
    setCourse(course)
  }

  const deleteCourse = (course) => {
    batch(() => {
      dispatch(
        removeCourseFromSemester({
          semesterTitle: title,
          course,
        })
      )
      dispatch(removeCourse({ course }))
    })
  }

  return (
    <Accordion
      defaultExpanded
      sx={{ backgroundColor: '#dba8574f' }}
      expanded={expanded}
      onChange={() => setExpanded((p) => !p)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#292929' }}>
        {courses.length === 0 ? (
          <Typography sx={{ padding: 1 }}>No courses</Typography>
        ) : (
          <Grid container>
            {courses.map((course) => (
              <Grid item xs={6} key={`${course.subject} ${course.number}`}>
                <StyledChip
                  label={`${course.subject} ${course.number}`}
                  onDelete={() => deleteCourse(course)}
                  onClick={() => courseClick(course)}
                />
              </Grid>
            ))}
          </Grid>
        )}
        {semesters.length > 1 && lastSemester && lastSemester.title === title && (
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: 0,
              transform: 'translate(-50%, 50%)',
            }}
          >
            <Grow in={expanded}>
              <IconButton
                size="small"
                title="Delete semester"
                sx={{
                  backgroundColor: '#383838',
                  color: '#e74c3c',
                  '&:hover': {
                    backgroundColor: '#404040',
                  },
                }}
                onClick={deleteSem}
              >
                <RemoveIcon />
              </IconButton>
            </Grow>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default Semester
