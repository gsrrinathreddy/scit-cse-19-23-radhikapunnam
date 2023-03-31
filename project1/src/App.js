import logo from './logo.svg';
import React from 'react';
import './App.css';
import INavbar from './components/INavbar';
import {Routes,Route} from 'react-router-dom';

import Aboutme from './pages/Aboutme';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Experience from './pages/Experience'
import Hobbies from './pages/Hobbies';
 
function App() {
  return (  
    <div className="fswd-19-23-app">
      <INavbar/>
 
      <Routes>
      <Route path="/Aboutme" element={<Aboutme />} />
      <Route path="/Qualification" element={<Qualification />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Certifications" element={<Certifications/>} />
      <Route path="/Hobbies" element={<Hobbies/>} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Experience" element={<Experience/>} />
      <Route path="/ContactMe" element={<ContactMe/>} />
 
       

      
      </Routes>
      
       
 
   
      
       
    </div>
     
  );
}

export default App;
