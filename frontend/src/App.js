import { Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import { getCourse } from './api/course'
import Home from './components/views/Home'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
