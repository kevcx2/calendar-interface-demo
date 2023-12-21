import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCalendarNavigation } from "./calendarService";

const MiniCalendar: React.FC = () => {
  const {
    calendarMonth,
    selectedWeek,
    selectedDay,
    selectNextMonth,
    selectPreviousMonth,
    selectWeek,
    selectDay,
  } = useCalendarNavigation();
  const { month, weeks, year } = calendarMonth;

  return (
    <Box
      sx={{
        minHeight: '216px',
      }}
    >
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Typography
          variant="body2"
          sx={{
            paddingLeft: '5px',
          }}
        >
          {`${month} ${year}`}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <IconButton color="warning" onClick={selectPreviousMonth}>
            <ChevronLeftIcon fontSize="small"/>
          </IconButton> 
          <IconButton color="warning" onClick={selectNextMonth}>
            <ChevronRightIcon fontSize="small"/>
          </IconButton> 
        </Box>
      </Box>
      {weeks.map(week => (
        <Grid2 container>
          {week.map(day => {
            const isSelected =
              selectedDay === day.index.day &&
              selectedWeek === day.index.week

            return (
              <Grid2
                xs
                sx={{
                  borderRadius: '1000px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: isSelected ? '#ffe57f' : 'none',
                  margin: `3px 0px`,
                  '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: '#ffe57f'
                  },
                }}
                onClick={() => {
                  selectWeek(day.index.week)
                  selectDay(day.index.day)
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    padding: '2px 5px',
                    color: day.isInPrimaryMonth ? '#424242' : '#9e9e9e',
                  }}
                >
                  {day.day}
                </Typography>
              </Grid2>
            )
          })}
        </Grid2>
      ))}
    </Box>
  )
}

export default MiniCalendar
