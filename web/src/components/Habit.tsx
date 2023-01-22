interface HabitProps {
  completed: number
}
export function Habit(props: HabitProps) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-900 text-white">
      {props.completed}
    </div>
  )
}
