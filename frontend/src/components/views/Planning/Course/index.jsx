import { Box, Typography, Chip, styled } from '@mui/material'

const StyledChip = styled(Chip)({
  margin: 6,
  cursor: 'pointer',
})

const HSL_FACTOR = 5

function Course({ depth = 1, type, pick = 1, value, displayType }) {
  if (depth > 3) return null
  return (
    <Box
      p={1.5}
      sx={{
        backgroundColor: `hsla(0, 0%, ${7 + depth * HSL_FACTOR}%, 1)`,
        mt: depth > 1 ? 1 : 0,
      }}
    >
      <Typography>
        <b>{displayType?.toUpperCase()}</b> {displayType ? 'p' : 'P'}ick{' '}
        {type === 'and' ? 'all' : pick} {`class${type === 'and' || pick > 1 ? 'es' : ''}`} from
      </Typography>
      {value.map(({ type: _type, value: _value, pick: _pick }) => {
        if (_type === 'course') {
          return (
            <StyledChip
              key={`${_value.subject} ${_value.number}`}
              label={`${_value.subject} ${_value.number}: ${_value.title}`}
              sx={{
                backgroundColor: `hsla(0, 0%, ${7 + (depth + 1) * HSL_FACTOR}%, 1)`,
                '&:hover': {
                  backgroundColor: `hsla(0, 0%, ${7 + (depth + 2) * HSL_FACTOR}%, 1)`,
                },
              }}
            />
          )
        }
        if (_type === 'and' || _type === 'or') {
          return (
            <Course
              key={`${depth + 1}-${_type}`}
              depth={depth + 1}
              type={_type}
              value={_value}
              pick={_pick}
              displayType={type}
            />
          )
        }

        return null
      })}
    </Box>
  )
}

export default Course
