import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function SelectDialog({
  open,
  onClose,
  onSubmit,
  onChange,
  defaultValue,
  options,
  title,
  message,
  label,
  noOptionsMessage,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
        {options.length === 0 ? (
          <DialogContentText>{noOptionsMessage}</DialogContentText>
        ) : (
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>{label}</InputLabel>
            <Select value={defaultValue} label={label} onChange={onChange}>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button disabled={options.length === 0} onClick={onSubmit}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SelectDialog
