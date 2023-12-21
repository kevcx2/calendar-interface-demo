import React from 'react'
import { useCalendarNavigation } from "./calendarService";
import { Calendar } from './Calendar'
import CalendarWeek from './CalendarWeek'
import CalendarHeader from './CalendarHeader'

const CalendarMonth: React.FC = () => {
  const { calendarMonth, selectedWeek } = useCalendarNavigation();
  const { weeks } = calendarMonth;

  return (
    <Calendar.Base >
      <CalendarHeader />
      { selectedWeek !== null ? (
        <CalendarWeek last week={selectedWeek}/>
      ) : 
      weeks.map((week, weekIndex) => {
        const last = weekIndex === weeks.length - 1
        return (
          <CalendarWeek last={last} week={weekIndex}/>
        )
      })}
    </Calendar.Base>
  )
}

export default CalendarMonth
