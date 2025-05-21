import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home'; 
import Contact from './components/Contact';
import About from './components/AboutMailchimp';
import Footer from './components/Footer';
import ParentComponent from './components/html/ParentComponent';
import ParentCss from './components/Css/ParentCss';
import ParentPython from './components/Python/ParentPython';
import ParentJavascript from './components/Javascript/ParentJavascript';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/html" element={<ParentComponent />} />
          <Route path="/Css" element={<ParentCss/>}/>
          <Route path="/Python" element={<ParentPython/>}/>
          <Route path="/Javascript" element={<ParentJavascript/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
