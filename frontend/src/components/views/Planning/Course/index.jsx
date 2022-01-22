import { v4 as uuidv4 } from 'uuid'
import {
  Box,
  Typography,
  Chip,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'

const StyledChip = styled(Chip)({
  margin: 6,
  cursor: 'pointer',
  maxWidth: 300,
})

const HSL_FACTOR = 5

function Course({ depth = 1, type, pick = 1, value, displayType, title }) {
  const { previousCourses } = useSelector((state) => state.course)

  if (depth > 4) {
    console.log('max depth reached')
    return null
  }
  return (
    <Accordion
      p={1.5}
      sx={{
        backgroundColor: `hsla(0, 0%, ${7 + depth * HSL_FACTOR}%, 1)`,
        mt: depth > 1 ? 1 : 0,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          alignItems: 'center',
        }}
      >
        <Typography>
          <b>{displayType?.toUpperCase()}</b> {displayType ? 'p' : 'P'}ick{' '}
          {type === 'and' ? 'all' : pick} {`course${type === 'and' || pick > 1 ? 's' : ''}`}
          <b>{depth === 1 || !title ? '' : ` from ${title}`}</b>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {value.map(({ type: _type, value: _value, pick: _pick, title: _title }, i) => {
          if (_type === 'course') {
            return (
              <StyledChip
                key={`${depth}-${_value.subject}-${_value.number}-${uuidv4()}`}
                label={`${_value.subject} ${_value.number}: ${_value.title}`}
                sx={{
                  backgroundColor: `hsla(0, 0%, ${7 + (depth - 0.75) * HSL_FACTOR}%, 1)`,
                  '&:hover': {
                    backgroundColor: `hsla(0, 0%, ${7 + depth * HSL_FACTOR}%, 1)`,
                  },
                }}
              />
            )
          }
          if (_type === 'and' || _type === 'or') {
            return (
              <Course
                key={`${depth + 1}-${_type}-${_pick}-${uuidv4()}`}
                depth={depth + 1}
                type={_type}
                value={_value}
                pick={_pick}
                title={_title}
                displayType={i === 0 ? undefined : type}
              />
            )
          }

          return null
        })}
      </AccordionDetails>
    </Accordion>
  )
}

export default Course
