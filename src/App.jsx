import { Box, Container } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Classes from './components/Classes'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <Box sx={{ 
      flexGrow: 1,
      width: '100%',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      <Navbar />
      <Hero />
      <Container 
        maxWidth={false} 
        sx={{ 
          mt: 8,
          px: { xs: 2, sm: 4, md: 6 },
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        <Classes />
      </Container>
      <AboutUs />
      <Footer />
    </Box>
  )
}

export default App
