import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
