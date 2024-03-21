// import logo from './logo.svg';
import React, { useState, useTransition } from "react";
import "./App.css";
// import About from './Components/About';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setalert] = useState("null");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setalert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setalert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> Home route */}
        <Route path="about" element={<TextForm />} /> {/* About route */}
        {/* <Route path="users" element={<Users />} /> Users route */}
      </Routes>

      {/* {<Navbar title="texUtils" aboutText="About TextUtils">}
            {<Navbar/>} */}
      <Navbar title="texUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container MY-3">
        <TextForm heading="Enter the text to analayze below" mode={mode} />
      </div>
    </>
  );
}

export default App;
