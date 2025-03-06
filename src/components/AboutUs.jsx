import { Box, Typography, Grid, Container } from '@mui/material'

function AboutUs() {
  return (
    <Box sx={{ py: 12, backgroundColor: '#f9f9f9' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Dance Studio"
              sx={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                mb: 4,
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#1a1a1a',
                fontFamily: 'Labrada, serif'
              }}
            >
              About Prakriti School of Dance
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#666',
                fontFamily: 'Labrada, serif'
              }}
            >
              Founded in 2010, Prakriti School of Dance has been at the forefront of dance education, 
              nurturing talent and preserving the rich heritage of Indian classical and contemporary dance forms.
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#666',
                fontFamily: 'Labrada, serif'
              }}
            >
              Our school is dedicated to providing comprehensive dance education under the guidance of 
              experienced instructors who have trained at prestigious institutions across India.
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    fontFamily: 'Labrada, serif'
                  }}
                >
                  500+
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#666',
                    fontFamily: 'Labrada, serif'
                  }}
                >
                  Students Trained
                </Typography>
              </Box>
              <Box>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    fontFamily: 'Labrada, serif'
                  }}
                >
                  50+
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#666',
                    fontFamily: 'Labrada, serif'
                  }}
                >
                  Performances
                </Typography>
              </Box>
              <Box>
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    fontFamily: 'Labrada, serif'
                  }}
                >
                  15+
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#666',
                    fontFamily: 'Labrada, serif'
                  }}
                >
                  Years Experience
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUs 