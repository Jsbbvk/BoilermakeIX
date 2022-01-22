import { Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './components/views/Home'
import InfoPopup from './components/common/InfoPopup'

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
      <InfoPopup />
    </ThemeProvider>
  )
}

export default App
