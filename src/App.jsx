import { Box, Container } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Classes from './components/Classes'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Hero />
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Classes />
      </Container>
      <AboutUs />
      <Footer />
    </Box>
  )
}

export default App
