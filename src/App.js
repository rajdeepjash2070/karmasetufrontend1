import React,{useEffect} from "react";
import './App.css';
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Adminhome from "./Components/Adminhome";
import Editjob from "./Components/Editjob";
import Addjob from "./Components/Addjob";

import Perdayfrontend from "./Components/Perdayfrontend";
import Permonthfrontend from "./Components/Permonthfrontend";
import Perweekfrontend from "./Components/Perweekfrontend";
import Adminregister from "./Components/Adminregister";


import Example from "./Components/Example";
import Frontendhome from "./Components/Frontendhome";
function App(){

  return (
    <Suspense fallback={null}>
    <Router>
   
    <Routes>
    <Route path="/" element={<Frontendhome/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/adminhome" element={<Adminhome/>}/>
    <Route path="/admineditjob" element={<Editjob/>}/>
    <Route path="/adminaddjob" element={<Addjob/>}/>
    <Route path="/example" element={<Example/>}/>
    <Route path="/perdayjob" element={<Perdayfrontend/>}/>
    <Route path="/permonthjob" element={<Permonthfrontend/>}/>
    <Route path="/perweekjob" element={<Perweekfrontend/>}/>
    <Route path="/adminregister" element={<Adminregister/>}/>

    </Routes>
    </Router>
  </Suspense>
  );
}

export default App;
