import './App.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='AboutMe'><Parallax type="About"/></section>
      <section><AboutMe/></section>
      <section id='Projects'><Parallax type="projects"/></section>
      <section><Projects/></section>
      <section id='Contact'>
        <Contact/>
      </section>
    </div>
  );
}

export default App;
