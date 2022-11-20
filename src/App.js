import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Experience from './Components/Experience';
import Home from './Components/Home';
import Education from './Components/Education';
import Languages from './Components/Languages';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Interests from './Components/Interests';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Experience/>
      <Education/>
      <Languages/>
      <Skills/>
      <Certificates/>
      <Interests/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
