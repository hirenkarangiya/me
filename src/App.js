import React from 'react';

// CSS
import './css/bootstrap.min.css';
import './css/style.css';
//Fontawesome CSS
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';

// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Specialities from './Components/Specialities';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Contact />
      <Specialities />
      <Skills />
      <Experience />
      <Education />
      <Footer />

    </div>
  );
}

export default App;
