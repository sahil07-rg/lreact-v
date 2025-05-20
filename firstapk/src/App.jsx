import Navbar from "./components/Navbar";
import Textform from "./components/textform";
import About from "./components/about";
import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import { Link } from "react-router-dom";




function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const router = createBrowserRouter([{
    path : "/",
    element : <Textform headings="Enter the text you want to write" mode={mode} />  
  },
  {
    path: "/about",
    element: <About />
  },

]);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const [btntxt, setbtntxt] = useState("Enable dark mode");

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      setbtntxt("Enable light mode");
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setbtntxt("Enable dark mode");
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Matchstick" mode={mode} togglemode={togglemode} btntxt={btntxt} />
        
      
      <Alert alert={alert} />
      <div className="container">
       
        
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
