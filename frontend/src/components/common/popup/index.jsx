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
  Button,
  Stack,
  Fade,
  Modal,
} from '@mui/material'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import LinkIcon from '@mui/icons-material/Link'
import { getCourse } from '../../../api'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  outline: 'none',
  p: 4,
  borderRadius: 5,
}

function InfoPopup({ open, onClose, course }) {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const [addable, setAddable] = useState(true)

  useEffect(() => {
    async function getCourseFetch() {
      const res = await getCourse(course.subject, course.number)
      setInfo(res)
      setLoading(false)
    }
    setLoading(true)
    getCourseFetch()
    // TODO: check if course is addable to semester (e.g. doesn't exist on schedule, prereqs met)
    setAddable(true)
  }, [course])

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <IconButton title="Close" sx={{ position: 'absolute', right: 4, top: 4 }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {course.subject} {course.number} - {course.title}
        </Typography>
        {loading ? (
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            Loading...
          </Typography>
        ) : (
          <>
            <Typography sx={{ mb: 1 }}>
              {' '}
              <strong>Description:</strong> {info.description}
            </Typography>
            <Typography sx={{ mb: 1 }}>
              <strong>Credits:</strong> {parseFloat(info.credits).toPrecision(3)}
            </Typography>
            {!addable && (
              <Typography sx={{ mb: 1 }} color="red">
                Some prerequisites have not been fufilled yet!
              </Typography>
            )}
            {/* TODO: view all prerequisites as collapsable, and similar logic to viewing degree */}
            <Typography sx={{ mb: 2 }} fontWeight="bold">
              View Prerequisites
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              disabled={!addable}
              title="Add to your semester schedule"
            >
              Add to Schedule
            </Button>
            <Button
              sx={{ ml: 1 }}
              variant="contained"
              startIcon={<LinkIcon />}
              title="View webpage"
              onClick={() => window.open(info.url)}
            >
              View webpage
            </Button>
          </>
        )}
      </Box>
    </Modal>
  )
}

export default InfoPopup
