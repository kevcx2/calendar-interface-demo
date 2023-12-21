import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#450a0a',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '15px',
        boxSizing: 'border-box'
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: 'white',
          fontWeight: 'semibold',
          marginRight: '20px'
        }}
      >
        Work Scheduling App
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          padding: "4px 8px",
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#5d4037',
            cursor: 'pointer'
          }
        }}
      >
        Workers
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          padding: "4px 8px",
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#5d4037',
            cursor: 'pointer'
          }
        }}
      >
        Scheduling
      </Typography>
    </Box>
  )
}

export default Navbar
