import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ShiftChip: React.FC<{type: string, number: number}> = ({ type, number }) => {
  let Icon

  if (type === 'AM') {
    Icon = <WbSunnyIcon sx={{padding: '0px 3px', fontSize: '16px', color: '#546e7a'}}/>
  } else if (type === 'PM') {
    Icon = <WbTwilightIcon sx={{padding: '0px 3px', fontSize: '16px', color: '#546e7a'}}/>
  } else {
    Icon = <DarkModeIcon sx={{padding: '0px 3px', fontSize: '16px', color: '#546e7a'}}/>
  }

  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'left',
      borderRadius: '2px',
      color: '#455a64'
    }}>
      <Typography sx={{ padding: '1px 8px', backgroundColor: '#eceff1', borderRadius: '2px 0px 0px 2px' }} variant="body2">3</Typography>
      {Icon}
      <Typography sx={{paddingRight: '5px'}} variant="body2">{type}</Typography>
    </Box>
  )
}

export default ShiftChip
