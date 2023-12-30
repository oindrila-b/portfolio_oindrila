import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './components/Home.jsx'
import {About} from './components/About.jsx'
import {WorkExperience} from './components/WorkExperience.jsx'
import {Projects} from './components/Projects.jsx'
import {Contact} from './components/Contact.jsx'

import './App.css';
import { SideNavBar } from "./components/SideNavBar.jsx";

function App() {
  return (
    <div className="App">
      <SideNavBar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutme" element={<About/>}/>
      <Route path="/experience" element={<WorkExperience/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
