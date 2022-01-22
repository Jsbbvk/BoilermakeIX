import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  styled,
  Chip,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector, useDispatch } from 'react-redux'
import Course from './Course'
import UCORE from '../../../constants/ucore'

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#dba8574f',
})

const StyledChip = styled(Chip)({
  margin: 6,
})

function Planning() {
  const { previousCourses } = useSelector((state) => state.course)
  return (
    <Box>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Degree Plan
      </Typography>
      <Box mt={4}>
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
                  <Course {...curriculum} />
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </StyledAccordion>
      </Box>
    </Box>
  )
}

export default Planning
