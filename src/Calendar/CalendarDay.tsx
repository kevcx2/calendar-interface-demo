import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { Calendar } from './Calendar'
import ShiftsChip from './ShiftsChip'

type CalendarDayProps = {
  number: number;
  last?: boolean;
  inPrimaryMonth?: boolean;
  selected?: boolean;
  onSelectDay?: () => void;
  children?: React.ReactNode; 
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  number,
  last,
  inPrimaryMonth,
  children,
  selected,
  onSelectDay
}) => {
  const hoverStyle = {
    boxShadow: 'inset 0px 3px 0px -1px #90a4ae',
    backgroundColor: '#fafafa',
    cursor: 'pointer'
  }
  const selectedStyle = selected ? hoverStyle : {}
  return (
    <Calendar.Day last={last}>
      <Box
        sx={{
          height: '140px',
          padding: '10px 15px',
          boxSizing: 'border-box',
          '&:hover': {
            boxShadow: 'inset 0px 3px 0px -1px #90a4ae',
            backgroundColor: '#fafafa',
            cursor: 'pointer'
          },
          ...selectedStyle
        }}
        onClick={onSelectDay}
      >
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Calendar.DayNumber secondary={!inPrimaryMonth}>
            {number}
          </Calendar.DayNumber>
          <Chip variant="outlined" color="warning" size="small" label="2 Open"/>
        </Box>
        <Stack spacing={.5}>
        <ShiftsChip type="AM" number={3}/>
        <ShiftsChip type="PM" number={2}/>
        <ShiftsChip type="NOC" number={8}/>
        </Stack>
      </Box>
    </Calendar.Day>
  )
}

export default CalendarDay
