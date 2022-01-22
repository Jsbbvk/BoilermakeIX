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
  Autocomplete,
  Stack,
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
        <Stack sx={{ mt: 5 }} alignItems="center">
          <Autocomplete
            disablePortal
            options={TRACKS}
            sx={{ width: '400px', maxWidth: '90vw' }}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={onSearchChange}
                value={query}
                autoComplete="off"
                label="Enter previous courses"
                variant="standard"
              />
            )}
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default EnterInfo
