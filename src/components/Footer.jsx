import { Box, Typography, Grid, Container, Link } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: 'Labrada, serif'
              }}
            >
              Prakriti School of Dance
            </Typography>
            <Typography 
              sx={{ 
                mb: 1,
                fontFamily: 'Labrada, serif'
              }}
            >
              123 Dance Street
            </Typography>
            <Typography 
              sx={{ 
                mb: 1,
                fontFamily: 'Labrada, serif'
              }}
            >
              Phone: (555) 123-4567
            </Typography>
            <Typography 
              sx={{ 
                mb: 1,
                fontFamily: 'Labrada, serif'
              }}
            >
              Email: info@prakritidance.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: 'Labrada, serif'
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>Home</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>Classes</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>About Us</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 2,
                fontFamily: 'Labrada, serif'
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>Instagram</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>Facebook</Link>
              <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: 'Labrada, serif' }}>YouTube</Link>
            </Box>
          </Grid>
        </Grid>
        <Typography 
          sx={{ 
            mt: 4, 
            textAlign: 'center',
            fontFamily: 'Labrada, serif'
          }}
        >
          © {new Date().getFullYear()} Prakriti School of Dance. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer 