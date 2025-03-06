import { Box, Typography, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Hero() {
  return (
    <Box
      sx={{
        height: '80vh',
        backgroundImage: 'url(https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            borderRadius: '30px',
            padding: '16px 40px',
            fontFamily: 'Labrada, serif',
            textTransform: 'none',
            fontSize: '1.3rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)'
            }
          }}
        >
          Book a Workshop
        </Button>
        <Box sx={{ textAlign: 'right', maxWidth: '800px', mb: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 'bold',
              mb: 3,
              color: 'white',
              fontFamily: 'Labrada, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              whiteSpace: 'nowrap',
              lineHeight: 1.2
            }}
          >
            Prakriti School of Dance
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontFamily: 'Labrada, serif',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              fontWeight: 400
            }}
          >
            Find the grace in you
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero 