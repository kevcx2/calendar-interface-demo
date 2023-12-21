import React from 'react'
import { useCalendarNavigation } from "./calendarService";
import { Calendar } from './Calendar'
import CalendarDay from './CalendarDay'

const CalendarWeek: React.FC<{week?: number, last?: boolean}> = ({ week, last }) => {
  const {
    calendarMonth,
    selectedWeek,
    selectedDay,
    selectDay,
    selectWeek
  } = useCalendarNavigation();
  const { weeks } = calendarMonth;
  const days = weeks[week || selectedWeek || 0]

  return (
    <Calendar.Week last={last}>
      {days.map((day, i) => {
        const last = i === days.length - 1
        const dayNumber = day.day
        const isSelected =
          selectedDay === day.index.day &&
          selectedWeek === day.index.week
        return (
          <CalendarDay
            last={last}
            number={dayNumber}
            date={day.date}
            selected={isSelected}
            inPrimaryMonth={day.isInPrimaryMonth}
            onSelectDay={() => {
              selectWeek(day.index.week)
              selectDay(day.index.day)
            }}
          >
          </CalendarDay>
        )
      })}
    </Calendar.Week>
  )
}

export default CalendarWeek
