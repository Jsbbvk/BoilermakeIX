import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './components/views/Home'
import InfoPopup from './components/common/InfoPopup'
import UserProvider from './components/Provider'

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
      <UserProvider>
        <Home />
        <InfoPopup />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
