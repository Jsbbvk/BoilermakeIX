import { Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { getCourse } from './api/course'
import InfoPopup from './components/common/popup'
import EnterInfo from './components/views/EnterInfo'
=======
import { useEffect } from 'react'
import { getCourse } from './api/course'
import Home from './components/views/Home'
>>>>>>> 18c8e144db5f6af639a2468080bc3150ea262599

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
