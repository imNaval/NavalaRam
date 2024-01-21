import "./app.scss"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Parallax from "./components/Parallax"

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services"> <Parallax type="services" /> </section>
      <section>Services</section>

      <section id="Projects"><Parallax type="projects" /></section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section>Project4</section>

      <section id="Contact"><a href="#">Contact</a></section>
    </div>
  )
}

export default App
