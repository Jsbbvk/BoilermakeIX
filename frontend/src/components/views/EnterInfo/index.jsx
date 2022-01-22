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
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const StyledChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'selected',
})(({ selected }) => ({
  margin: 6,
  cursor: 'pointer',
  backgroundColor: selected ? '#8eff98' : '#00000014',
  '&:hover': {
    backgroundColor: selected ? '#8eff98' : '#0000001f',
  },
}))

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

function EnterInfo() {
  const [selectedTracks, setSelectedTracks] = useState([])
  const [query, setQuery] = useState('')

  const onSearchChange = (e) => setQuery(e.target.value || '')
  const onTrackSelect = (track) => {
    setSelectedTracks((p) =>
      p.find((t) => t === track) ? p.filter((t) => t !== track) : [...p, track]
    )
  }

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3">Purdue Planner</Typography>
        <Box mt={5}>
          <Typography variant="h6">Select CS Tracks</Typography>
          <Box>
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
        <Box mt={7}>
          <FormControl sx={{ width: '300px', maxWidth: '90vw' }} variant="standard">
            <InputLabel htmlFor="search-course-field">Enter previous courses</InputLabel>
            <Input
              id="search-course-field"
              onChange={onSearchChange}
              value={query}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Clear search field"
                    onClick={() => setQuery('')}
                    edge="end"
                    disableRipple
                  >
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>
    </Container>
  )
}

export default EnterInfo
