import {
  Typography,
  styled,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@mui/material'
import { useMemo, useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { batch, useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import {
  addCourse,
  addCourseToSemester,
  removeCourse,
  removeCourseFromSemesters,
  setCurrentSemester,
} from '../../../../store'
import { checkPrereqs, hasTaken } from '../../../../utilities'

import 'react-toastify/dist/ReactToastify.css'

const StyledButton = styled(Button)({
  textTransform: 'none',
  fontSize: '1rem',
  backgroundColor: '#6e5a3b',
  color: '#fff',
  borderColor: '#5d4e37 !important',
  transition: 'border-radius 250ms ease, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&.Mui-disabled': {
    backgroundColor: '#dba85740',
  },

  '&:hover': {
    backgroundColor: '#806844',
  },
})

const DeleteButton = styled(Button)({
  textTransform: 'none',
  fontSize: '1rem',
  backgroundColor: '#6e5a3b',
  color: '#fff',
  borderRadius: 20,
  padding: '8px 24px',

  '&.Mui-disabled': {
    backgroundColor: '#dba85740',
  },

  '&:hover': {
    backgroundColor: '#806844',
  },
})

function AddButton({ courseInfo, close }) {
  const { semesters, currentSemester } = useSelector((state) => state.semester)
  const { previousCourses } = useSelector((state) => state.course)

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const isDupe = useMemo(() => hasTaken(courseInfo, previousCourses), [courseInfo, previousCourses])

  const courseAdd = (semester) => {
    // TODO display error
    const validPrereq = checkPrereqs(courseInfo, previousCourses, semester)

    if (!validPrereq) {
      // console.log('invalid')
      toast.error('Prerequisites not met!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
      return
    }

    batch(() => {
      dispatch(setCurrentSemester(semester))
      dispatch(
        addCourseToSemester({
          semesterTitle: semester.title,
          course: {
            number: courseInfo.number,
            subject: courseInfo.subject,
            title: courseInfo.title,
          },
        })
      )
      dispatch(
        addCourse({
          course: {
            number: courseInfo.number,
            subject: courseInfo.subject,
            title: courseInfo.title,
          },
        })
      )
    })
    close()
  }

  const handleClick = () => {
    courseAdd(currentSemester)
  }

  const handleMenuItemClick = (_, index) => {
    courseAdd(semesters[index])
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const onDelete = () => {
    batch(() => {
      dispatch(removeCourse({ course: courseInfo }))
      dispatch(removeCourseFromSemesters({ course: courseInfo }))
    })
    close()
  }

  return (
    <>
      <ToastContainer />
      {isDupe ? (
        <DeleteButton onClick={onDelete}>Remove course</DeleteButton>
      ) : (
        <ButtonGroup variant="contained" ref={anchorRef} sx={{ boxShadow: 'none' }}>
          <StyledButton
            onClick={handleClick}
            sx={{
              borderRadius: open ? '20px 0 0 0' : '20px 0 0 20px',
              padding: '8px 16px 8px 24px',
            }}
            disableRipple
          >
            {currentSemester?.title ? (
              <span>
                Add to <b>{currentSemester?.title}</b>
              </span>
            ) : (
              ''
            )}
          </StyledButton>
          <StyledButton
            size="small"
            onClick={handleToggle}
            sx={{ borderRadius: open ? '0 20px 0 0' : '0 20px 20px 0' }}
            disableRipple
            disabled={semesters.length === 1}
          >
            <ArrowDropDownIcon />
          </StyledButton>
        </ButtonGroup>
      )}
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        placement="bottom"
        style={{ zIndex: 99999 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            timeout={250}
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper
              sx={{
                borderRadius: '0 0 20px 20px',
                width: anchorRef.current?.offsetWidth || '200px',
                backgroundColor: '#5d441a',
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {semesters.flatMap(({ index, title }, i) =>
                    index === currentSemester?.index
                      ? []
                      : [
                          <MenuItem
                            key={`${title}-${index}`}
                            onClick={(event) => handleMenuItemClick(event, i)}
                            sx={{ justifyContent: 'center' }}
                          >
                            <Typography variant="body1">{title}</Typography>
                          </MenuItem>,
                        ]
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

export default AddButton
