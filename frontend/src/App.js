import { Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import { getcourse } from './api/course'
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
  useEffect(() => {
    getcourse('CS', '18000')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={() => {
          console.log('nice')
        }}
      >
        Click me
      </Button>
      {/* <CssBaseline />
      <EnterInfo /> */}
    </ThemeProvider>
  )
}

export default App
