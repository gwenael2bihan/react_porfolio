import React from 'react'
import './App.css';
import About from './components/About';
import Banner from './components/Banner'
import Contact from './components/Contact';
import Nav from './components/Nav'
import Skills from './components/Skills';

function App() {
  const homeRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const contactRef = React.useRef(null);

  function handleHomeClick() {
    homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleSkillsClick() {
    skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleAboutClick()  {
    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleContactClick()  {
    contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  

  return (
    <div>
      <Banner ref={homeRef} handleSkillsClick={handleSkillsClick}/>
      <Nav 
        handleHomeClick={handleHomeClick}
        handleSkillsClick={handleSkillsClick}
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
        />
      <Skills ref={skillsRef}/>
      <About ref={aboutRef} />
      <Contact ref={contactRef}/>
      <footer className="footer"><a>© 2021 Gwenael Bihan Portfolio. Tous droits réservés.</a></footer>
      
    </div>
  );
}

export default App;
