import { Button, CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { getCourse } from './api/course'
import Home from './components/views/Home'
import { store } from './store'

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

export default App
