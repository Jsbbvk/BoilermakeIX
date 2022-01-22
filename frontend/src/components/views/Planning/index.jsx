import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  styled,
  Chip,
  Grid,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector, useDispatch } from 'react-redux'
import Course from './Course'
import UCORE from '../../../constants/ucore'
import MAJOR from '../../../constants/major'
import CourseModal from './CourseModal'
import Schedule from './Schedule'

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#dba8574f',
})

const StyledChip = styled(Chip)({
  margin: 6,
})

function Planning() {
  const { previousCourses } = useSelector((state) => state.course)
  return (
    <Grid container spacing={1}>
      <Grid item xs={8}>
        <Box>
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Degree Plan
          </Typography>
          <Box mt={4}>
            {/* TODO and help section explaining logic */}
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">University Core Curriculum</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {Object.values(UCORE).map((curriculum) => (
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
            <StyledAccordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">Major Requirements</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {Object.values(MAJOR).map((curriculum) => (
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
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Schedule />
      </Grid>
    </Grid>
  )
}

export default Planning
