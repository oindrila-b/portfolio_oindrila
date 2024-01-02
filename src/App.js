import './App.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';

function App() {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='AboutMe'><Parallax type="About"/></section>
      <section>AboutMe</section>
      <section id='Projects'><Parallax type="projects"/></section>
      <section>Project 1</section>
      <section>Project 2</section>
      <section>Project 3</section>
      <section>Project 4</section>
      <section id='Contact'>contact</section>
    </div>
  );
}

export default App;
