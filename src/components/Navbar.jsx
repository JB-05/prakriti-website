import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

function Navbar() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        zIndex: 1200
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            color: '#333',
            fontFamily: 'Labrada, serif',
            fontWeight: 'bold',
            fontSize: '1.8rem'
          }}
        >
          Prakriti
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            sx={{ 
              color: '#333',
              fontFamily: 'Labrada, serif',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)'
              }
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              color: '#333',
              fontFamily: 'Labrada, serif',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)'
              }
            }}
          >
            Contact
          </Button>
          <Button 
            color="inherit" 
            sx={{ 
              color: '#333',
              fontFamily: 'Labrada, serif',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.04)'
              }
            }}
          >
            About Us
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#333',
              fontFamily: 'Labrada, serif',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: '#444'
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar 