import React, {Component} from "react"
import {Routes, Route} from "react-router-dom";
import Locations from "./components/Locations";
import './App.css';
import FirstBoss from "./components/First.boss";
import NewRun from "./components/User-Pages/New-Run/NewRun";



class App extends Component {
  render() {
    return(
      <div>
      <Routes>
        <Route exact path="/" element={<Locations />}/>
        <Route exact path ="/first" element={<FirstBoss />}/>
        <Route exact path="/first/new" element={<NewRun />}/>
      </Routes>
      </div>
    
    )
  }
}


export default App;
