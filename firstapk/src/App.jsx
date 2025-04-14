import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import About from "./components/about";
import "./App.css";
import React, { useState } from 'react';
import Alert from "./components/Alert";



function App() {
  const [mode, setmode]= useState('light');

  const [btntxt, setbtntxt]= useState("Enable dark mode");

  const togglemode=() =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
      setbtntxt("Enable light mode");}
    else {
      setmode('light');
      document.body.style.backgroundColor='white';
      setbtntxt("Enable dark mode");
    };
  }

  return (
    <>
    
       <Navbar title="Matchstick" mode={mode} togglemode={togglemode} btntxt={btntxt}/>    
       <Alert alert = "This is alert"/>    
       <div className="container">
      <Textform headings= "Enter the text you want to write " mode={mode} /> 
     {/* <About/> */}
     </div>
    </>
  )
}


export default App
