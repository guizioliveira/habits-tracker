import { Plus } from "phosphor-react"
import logoImage from "../assets/logo.svg"

export function Header() {
  return (
    <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <button
        className="group flex items-center gap-3 rounded-lg border border-violet-500 px-6 py-4 font-semibold transition-colors hover:bg-violet-600"
        type="button"
      >
        <Plus
          size={20}
          className="text-violet-500 transition-colors group-hover:text-white"
        />
        New habit
      </button>
    </div>
  )
}
