import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import EnterInfo from './components/views/EnterInfo'

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
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EnterInfo />
    </ThemeProvider>
  )
}

export default App
