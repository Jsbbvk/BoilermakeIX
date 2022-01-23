import { Box, styled, Button, Stack, Dialog, Typography, Fade, LinearProgress } from '@mui/material'
import { useState, forwardRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPercentageOfCompletion } from '../../../../utilities'
// eslint-disable-next-line import/no-cycle
import Course from '../Course'

const StyledButton = styled(Button)({
  backgroundColor: '#dba857d6',
  color: '#fff',
  textTransform: 'none',
  borderRadius: 40,
  padding: '10px 16px',

  '&:hover': {
    backgroundColor: '#dba857f4',
  },
})

// eslint-disable-next-line react/display-name
const Transition = forwardRef((props, ref) => <Fade ref={ref} {...props} />)

const scrollStyles = {
  '&::-webkit-scrollbar': {
    width: 5,
  },

  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '#adadad',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '#919191',
  },

  '& > div:nth-of-type(even)': {
    backgroundColor: '#f0f0f0',
  },
}

function CourseModal({ curriculum }) {
  const { previousCourses } = useSelector((state) => state.course)

  const [open, setOpen] = useState(false)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    if (open) setPercent(getPercentageOfCompletion(curriculum, previousCourses, 100))
  }, [previousCourses, open, curriculum])

  return (
    <Stack alignItems={{ xs: 'center', md: 'flex-start' }} px={3}>
      {open && (
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          TransitionComponent={Transition}
          maxWidth="lg"
          PaperProps={{ sx: scrollStyles }}
        >
          <Box py={4} px={{ xs: 2, md: 5 }}>
            <Box mb={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="h6">{curriculum.title}</Typography>
                <Box
                  sx={{
                    width: '75px',
                    color: () => {
                      if (percent < 50) return '#d32f2f'
                      if (percent < 100) return '#fbc02d'
                      return '#66bb6a'
                    },
                  }}
                >
                  <LinearProgress variant="determinate" value={percent} color="inherit" />
                </Box>
              </Stack>
            </Box>
            <Course {...curriculum} />
          </Box>
        </Dialog>
      )}
      <StyledButton onClick={() => setOpen(true)}>Show all courses</StyledButton>
    </Stack>
  )
}

export default CourseModal
