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
// import { HUM, IL, BSS } from '../../../constants/ucore'

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#dba8574f',
})

const StyledChip = styled(Chip)({
  margin: 6,
})

const temp = {
  type: 'or',
  pick: 2,
  value: [
    {
      type: 'course',
      value: 'AMST 10100: America and the World',
    },
    {
      type: 'course',
      value: 'CS 25000: Compilers: Principles And Practice',
    },
    {
      type: 'and',
      value: [
        {
          type: 'course',
          value: 'AMST 10100: America and the World',
        },
        {
          type: 'course',
          value: 'CS 25000: Compilers: Principles And Practice',
        },
      ],
    },
  ],
}

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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6">Written Communication</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* {[...new Array(10).keys()].map((i) => (
                  <StyledChip key={i} label="AMST 10100: America and the World" />
                ))} */}
                <Course {...temp} />
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </StyledAccordion>
      </Box>
    </Box>
  )
}

export default Planning
