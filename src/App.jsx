
import styles from './App.module.css';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Education } from './components/Education/Education';

function App() {
  

  return <div className={styles.App}>
    <Navbar/>
    <Hero />
    <Education/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact />
  </div>
}

export default App
