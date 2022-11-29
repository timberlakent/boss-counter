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
import SecondBoss from "./components/Bosses/Vordt/vordt.page";
import VordtNew from "./components/User-Pages/Boss-Runs-info/Vordt/vordt-run";
import VordtEdit from "./components/Edit-pages/vordt-edit/vordt-edit-form";
import VordtShow from "./components/Personal-run/showVordtRun";
import ThirdBoss from "./components/Bosses/Dancer/Dancer.page";
import DancerNew from "./components/User-Pages/Boss-Runs-info/Dancer/dancer-run";
import DancerShow from "./components/Personal-run/dancer-personalRun/dancerShow";
import DancerEdit from "./components/Edit-pages/Dancer-edit/dancer-edit-form";
import myGif from "./bonfire-1.gif";
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
        <Route exact path="/highwalloflothric/Dancer" element={<ThirdBoss />}/>
        <Route exact path="/highwalloflothric/Vordt/new" element={<VordtNew />}/>
        <Route exact path="/highwalloflothric/Dancer/new" element={<DancerNew />}/>
        <Route exact path="/highwalloflothric/vordt/:id" element={<VordtEdit />}/>
        <Route exact path="/highwalloflothric/dancer/:id" element={<DancerEdit />}/>
        <Route exact path ="/first" element={<Gundyr />}/>
        <Route exact path="/first/new" element={<NewRun />}/>
        <Route exact path="/delete/:id" element={<Show />}/>
        <Route exact path="/vordt/:id" element={<VordtShow />}/>
        <Route exact path="/dancer/:id" element={<DancerShow />}/>

        <Route exact path="/first/:id" element={<Edit />}/>
      </Routes>
      <div className="gif">
      <img src={myGif} alt="my-gif"/>
      </div>
      </div>
    
    )
  }
}


export default App;
