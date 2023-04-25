import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
/*
/  Exports a library of base calendar components used for constructing calendar views.
*/

// <Calendar.Base> wrapper. Renders an outline and the MUI Grid container
const CalendarStyled = styled(Grid2)`
  margin: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  min-width: 750px;
  background-color: #ffffff;
`;

type BaseFC = React.FC<{children: React.ReactNode}>
let Base: BaseFC = ({ children }) => {
  return (
    <CalendarStyled container>
      { children }
    </CalendarStyled>
  )
}

// <Calendar.Header>. A section for any header info included above the calendar
const HeaderStyled = styled(Grid2)`
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
`;

type HeaderFC = React.FC<{children: React.ReactNode}>
const Header: HeaderFC = ({ children }) => {
  return (
    <HeaderStyled container xs={12}>
      { children }
    </HeaderStyled>
  )
}

// <Calendar.Week>. A section for a calendar week / row. Optional 'last' prop
// eliminates the bottom border (to not create a double border with the
// <Calendar> outline).
const WeekStyled = styled(Grid2)`
  border-bottom: 1px solid #e0e0e0;
`;

type WeekFC = React.FC<{children: React.ReactNode, last?: boolean}>
const Week: WeekFC = ({ children, last }) => {
  return (
    <WeekStyled container xs={12} style={last ? {borderBottom: "0px"} : undefined}>
      {children}
    </WeekStyled>
  )
}

// <CalendarDay>. A section for a single day / cell. Optional 'last' prop
// eliminates the right border (to not create a double border with the
// <Calendar> outline).
const DayStyled = styled(Grid2)`
  border-right: 1px solid #e0e0e0;
`;

type DayFC = React.FC<{children: React.ReactNode, last?: boolean}>
const Day: DayFC = ({ children, last }) => {
  return (
    <DayStyled xs sx={last ? {borderRight: '0px'} : undefined}>
      {children}
    </DayStyled>
  );
};

// <Calendar.DayOfWeekLabels>. A section at the top of calendar labeling each day / column.
// There should be 7 labels -- one for each day.
type DayOfWeekLabelsFC = React.FC<{labels: string[]}>
const DayOfWeekLabels: DayOfWeekLabelsFC = ({ labels }) => {
  return (
    <>
      {labels.map((label, i) => {
        const last = i === labels.length - 1
        return (
          <Day last={last}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                color: '#757575',
                padding: '8px 15px'
              }}
            >
              {label.toUpperCase()}
            </Typography>
          </Day>
        )
      })}
    </>
  )
}

// <Calendar.DayNumber>. A Typographic helper to render the day's number
// With primary or secondary formatting. When rendering a calendar
// we should de-ephasize any days that are not in the calendar's month
// using the secondary prop.
//
// For example, the calendars month might start on a Tues, so we render
// Sun & Mon from the previous month.
type DayNumberFC = React.FC<{children: React.ReactNode, secondary?: boolean}>
const DayNumber: DayNumberFC = ({ children, secondary }) => {
  if (!secondary) {
    return (
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: '#424242'
        }}
      >
        {children}
      </Typography>
    )
  } else {
    return (
      <Typography
        variant="h6"
        component="p"
        sx={{
          color: '#9e9e9e'
        }}
      >
        {children}
      </Typography>
    )
  }
}

export const Calendar = {
  Base,
  Header,
  Week,
  Day,
  DayOfWeekLabels,
  DayNumber,
}
