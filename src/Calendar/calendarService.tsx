import { entity, useEntity } from 'simpler-state'
import calendarUtility from "calendar-js";

export interface CalendarDayType {
  date: Date
  day: number
  isInPrimaryMonth: boolean
  isInLastWeekOfPrimaryMonth: boolean
  index: {
    day: number
    week: number
  }
}

interface CalendarMonthType {
  year: string
  yearAbbr: string
  month: string
  monthAbbr: string
  weekdays: string[]
  weekdaysAbbr: string[]
  days: number
  firstWeekday: number
  lastWeekday: number
  weeks: CalendarDayType[][]
}

// Initial configuration. Naming months.
calendarUtility({
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  monthsAbbr: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]
});

interface CalendarState {
  calendarMonth: CalendarMonthType
  selectedMonth: number;
  selectedYear: number;
  selectedWeek: number | null;
  selectedDay: number | null;
}

interface CalendarSetters {
  selectMonth: (month: number) => void;
  selectNextMonth: () => void;
  selectPreviousMonth: () => void;
  selectWeek: (week: number | null) => void;
  selectFirstWeek: () => void;
  selectDay: (day: number | null) => void;
  clearWeekSelection: () => void;
}

const month = entity(new Date().getMonth())
const year = entity(new Date().getFullYear())
const week = entity<CalendarState["selectedWeek"]>(null)
const day = entity<CalendarState["selectedDay"]>(null)

const setters: CalendarSetters = {
  selectMonth: (newMonth) => {
    month.set(() => newMonth)
  },
  selectNextMonth: () => {
    month.set((currentMonth) => {
      if (currentMonth === 11) {
        year.set((currentYear) => currentYear + 1)
        return 0
      } else {
        return currentMonth + 1
      }
    })
  },
  selectPreviousMonth: () => {
    month.set((currentMonth) => {
      if (currentMonth === 0) {
        year.set((currentYear) => currentYear - 1)
        return 11
      } else {
        return currentMonth - 1
      }
    })
  },
  selectWeek: (newWeek) => {
    week.set(() => newWeek)
  },
  selectFirstWeek: () => {
    week.set(() => 0)
    day.set(() => null)
  },
  selectDay: (newDay) => {
    day.set(() => newDay)
  },
  clearWeekSelection: () => {
    week.set(() => null)
    day.set(() => null)
  },
}

// Takes in a year and month as parameters and returns a CalendarMonth object.
// For readability, rename the 'calendar' field natively returned by the
// calendar-js library to 'week'.
const getCalendarMonth = (year: number, month: number): CalendarMonthType=> {
  const calendarMonth = calendarUtility().detailed(year, month);
  const { calendar, ...rest } = calendarMonth
  return {
    ...rest,
    weeks: calendar,
  };
}

export const useCalendarNavigation = (): CalendarState & CalendarSetters => {
  const selectedYear = useEntity(year)
  const selectedMonth = useEntity(month)
  const selectedWeek = useEntity(week)
  const selectedDay = useEntity(day)
  const calendarMonth = getCalendarMonth(selectedYear, selectedMonth)

  return {
    calendarMonth,
    selectedYear,
    selectedMonth,
    selectedWeek,
    selectedDay,
    ...setters
  }
}