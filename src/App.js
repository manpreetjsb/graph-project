import Header from './components/header/header'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/footer/Footer'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { theme } from '../src/styles/theme'

const App = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
