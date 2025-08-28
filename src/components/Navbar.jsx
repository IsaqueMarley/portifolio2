import { ThemeToggle } from "./ThemeToggle"

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <ThemeToggle />
    </nav>
  )
}
