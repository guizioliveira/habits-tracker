import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./Habit"

const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
const summaryDates = generateDatesFromYearBeginning()

const minimunSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

export function SummaryTable() {
  return (
    <div className="flex w-full">
      <div className="grid-rows-7 grid grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay}-${index}`}
            className="flex h-10 w-10 items-center justify-center text-xl font-bold text-zinc-400"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid-rows-7 grid grid-flow-col gap-3">
        {summaryDates.map((date) => (
          <HabitDay key={date.toString()} />
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 cursor-not-allowed rounded-lg border-2 border-zinc-800 bg-zinc-900 opacity-40"
            />
          ))}
      </div>
    </div>
  )
}
