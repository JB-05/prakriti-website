import { Box, Typography, Grid, Container } from '@mui/material'

function Classes() {
  return (
    <Box sx={{ py: 4, width: '100%' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontFamily: 'Labrada, serif',
            fontWeight: 'bold'
          }}
        >
          Classes
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            mb: 3,
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: '#666',
            maxWidth: '800px',
            mx: 'auto',
            fontFamily: 'Labrada, serif'
          }}
        >
          Experience our latest class additions featuring mesmerizing dance compositions and standalone performances that beautifully represent the richness of Indian art and culture. Join us now and immerse yourself in the magic.
        </Typography>
        
        <Box sx={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          <Grid container spacing={3} sx={{ width: '100%', px: { xs: 2, sm: 4, md: 8 } }}>
            {/* Left side - Landscape container */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: '400px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Bharatanatyam"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 3,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <Typography
                    sx={{
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      fontFamily: 'Labrada, serif'
                    }}
                  >
                    Bharatanatyam
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right side - Grid of 4 containers */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} sx={{ height: '400px' }}>
                {[
                  {
                    title: 'Kathak',
                    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  },
                  {
                    title: 'Odissi',
                    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  },
                  {
                    title: 'Kuchipudi',
                    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  },
                  {
                    title: 'Manipuri',
                    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                  }
                ].map((dance, index) => (
                  <Grid item xs={6} key={index}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: '190px', // Fixed height to match grid
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          transition: 'transform 0.3s ease'
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={dance.image}
                        alt={dance.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 2,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'white',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            fontFamily: 'Labrada, serif'
                          }}
                        >
                          {dance.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Classes 