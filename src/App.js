import React from 'react';
import './App.css';

//component imports
import HeaderBar from './Components/HeaderBar.js';
import Jay from './Components/Jay.js';
import Content from './Components/Content.js';
import Bio from './Components/Bio.js';
import Footer from './Components/Footer.js';

const App = () => {
  return (
    <>
    <HeaderBar />
    <Jay />
    <Bio />
    <Content />
    <Footer />
    </>
  );
}

export default App;
