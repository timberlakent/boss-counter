import React, {Component} from "react"
import {Routes, Route} from "react-router-dom";
import Locations from "./components/Locations";
import './App.css';
// import FirstBoss from "./components/First.boss";
import NewRun from "./components/User-Pages/New-Run/NewRun";
import Edit from "./components/Edit-pages/Edit";
import Show from "./components/Personal-run/personal";
import Cemetary from "./components/All-locations/cemetary";
import Gundyr from "./components/User-Pages/New-Run/first.boss.form";
import HighWall from "./components/All-locations/highwall";
import SecondBoss from "./components/Bosses/vordt.page";
import VordtNew from "./components/User-Pages/New-Run/vordt-runs/vordt-run";
import VordtEdit from "./components/Edit-pages/vordt-edit/vordt-edit-form";
import VordtShow from "./components/Personal-run/showVordtRun";
// import EditForm from "./components/Edit-pages/EditForm";



class App extends Component {
  render() {
    return(
      <div>
      <Routes>
        <Route exact path="/" element={<Locations />}/>
        <Route exact path="/cemetaryofash" element={<Cemetary />}/>
        <Route exact path="/highwalloflothric" element={<HighWall />}/>
        <Route exact path="/highwalloflothric/Vordt" element={<SecondBoss />}/>
        <Route exact path="/highwalloflothric/Vordt/new" element={<VordtNew />}/>
        <Route exact path="/highwalloflothric/vordt/:id" element={<VordtEdit />}/>
        <Route exact path ="/first" element={<Gundyr />}/>
        <Route exact path="/first/new" element={<NewRun />}/>
        <Route exact path="/delete/:id" element={<Show />}/>
        <Route exact path="/vordt/:id" element={<VordtShow />}/>
        <Route exact path="/first/:id" element={<Edit />}/>
      </Routes>
      </div>
    
    )
  }
}


export default App;
