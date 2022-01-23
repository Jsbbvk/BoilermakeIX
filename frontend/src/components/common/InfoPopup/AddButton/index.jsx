import {
  Typography,
  Box,
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
import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useDispatch, useSelector } from 'react-redux'

function AddButton() {
  const { semesters, currentSemester } = useSelector((state) => state.semester)

  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleClick = () => {}

  const handleMenuItemClick = (event, index) => {
    //
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

  return (
    <>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button onClick={handleClick}>{currentSemester?.title || ''}</Button>
        <Button size="small" onClick={handleToggle}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {semesters.map(({ index, title }, i) => (
                    <MenuItem
                      key={`${title}-${index}`}
                      selected={index === currentSemester?.index}
                      onClick={(event) => handleMenuItemClick(event, i)}
                    >
                      {title}
                    </MenuItem>
                  ))}
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
