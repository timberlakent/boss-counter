import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { userRun } from "../../../backend/models";
// let baseUrl = process.env.REACT_APP_BACKEND_PORT

export class Vordt extends Component {
    constructor(props){
        super(props);
            this.state = {
                vordtRun:[],
            }
        }
        componentDidMount() {
            this.getVordtRun();
        }
        getVordtRun = () =>{
            fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/highwalloflothric/vordt`
            )
            .then((res)=>{
                if (res.status === 200){
                    return res.json();
                } else {
                    return[];
                }
            })
            .then((data)=>{
                this.setState({vordtRun: data.vordtRun});
            })
        }
        render() {
            return(
              
                <div className="firstboss"> 
                <img src="https://i.ytimg.com/vi/4b7EKG7cOik/maxresdefault.jpg"></img>
                <h2>Vordt of the Borreal valley</h2>
                <h3>Health: 1328</h3>
                <h3>Souls Dropped: 3000</h3>
                <h3>Weak to: Dark , Strike</h3>
              
                    <h1>Player Runs</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Run Number</th>
                                <th>Deaths</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.vordtRun.map((vordtRun)=>{
                                return (
                                    <tr className="td" key = {vordtRun._id}>
                                        
                                        <td>
                                            <Link className="wall" to={`/vordt/${vordtRun._id}`}>
                                                {vordtRun.name}
                                            </Link>
                                        </td>
                            
                                        <td>{vordtRun.runNumber}</td>

                                        <td>{vordtRun.deaths}</td>

                                        <td>{vordtRun.notes}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button>
                    <Link className="links" to="/highwalloflothric/Vordt/new">New Run</Link>
                    </button>
                    <button>
                    <Link className="links" to="/">Locations</Link>
                    </button>
                    
                </div>
            );
        }
    }




    export default Vordt;
