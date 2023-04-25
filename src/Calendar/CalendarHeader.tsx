import React from 'react'
import Grid2 from "@mui/material/Unstable_Grid2"
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useCalendarNavigation } from "./calendarService";
import { Calendar } from './Calendar'

export const Header: React.FC<{month: string, year: string}> = ({ month, year }) => {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          fontWeight: 600,
          display: 'inline',
          color: '#212121'
        }}
      >
        {month}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          display: 'inline',
          fontWeight: 500,
          color: '#212121'
        }}
      >
        {` ${year}`}
      </Typography>
    </div>
  )
}

const CalendarHeader: React.FC = () => {
  const {
    calendarMonth,
    selectedWeek,
    clearWeekSelection,
    selectFirstWeek,
  } = useCalendarNavigation();
  const {
    year,
    month,
    weekdaysAbbr,
  } = calendarMonth;

  const onSelectViewType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const isWeekSelected = selectedWeek !== null

    if (target.value === 'month') {
      if (isWeekSelected) {
        clearWeekSelection()
      }
    } else if (target.value === 'week') {
      if (!isWeekSelected) {
        selectFirstWeek()
      }
    }
  }

  const currentViewType = selectedWeek !== null ? 'week' : 'month'
  return (
    <>
      <Calendar.Header>
        <Grid2
          xs={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Header month={month} year={year}/>
          <TextField
            sx={{
              margin: '0px',
              flex: 1,
              width: '100%',
              maxWidth: '150px'
            }}
            id="outlined-select-gender"
            select
            margin="normal"
            variant="outlined"
            size="small"
            value={currentViewType}
            onChange={onSelectViewType}
          >
            <MenuItem value={'week'}>Week</MenuItem>
            <MenuItem value={'month'}>Month</MenuItem>
          </TextField>
        </Grid2>
      </Calendar.Header>
      <Calendar.Week>
        <Calendar.DayOfWeekLabels labels={weekdaysAbbr}/>
      </Calendar.Week>
    </>
  )
}

export default CalendarHeader
