import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { userRun } from "../../../backend/models";
// let baseUrl = process.env.REACT_APP_BACKEND_PORT

export class Dancer extends Component {
    constructor(props){
        super(props);
            this.state = {
                dancerRun:[],
            }
        }
        componentDidMount() {
            this.getDancerRun();
        }
        getDancerRun = () =>{
            fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/highwalloflothric/dancer`
            )
            .then((res)=>{
                if (res.status === 200){
                    return res.json();
                } else {
                    return[];
                }
            })
            .then((data)=>{
                this.setState({dancerRun: data.dancerRun});
            })
        }
        render() {
            return(
              
                <div className="firstboss"> 
                <img src="https://wallpaperaccess.com/full/5325635.jpg"></img>
                <h2>Dancer of the Borreal valley</h2>
                <h3>Health: 5,100</h3>
                <h3>Souls Dropped: 60,000</h3>
                <h3>Weak to: Dark , Lightning, Strike </h3>
              
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
                            {this.state.dancerRun.map((dancerRun)=>{
                                return (
                                    <tr className="td" key = {dancerRun._id}>
                                        
                                        <td>
                                            <Link className="wall" to={`/dancer/${dancerRun._id}`}>
                                                {dancerRun.name}
                                            </Link>
                                        </td>
                            
                                        <td>{dancerRun.runNumber}</td>

                                        <td>{dancerRun.deaths}</td>

                                        <td>{dancerRun.notes}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button>
                    <Link className="links" to="/highwalloflothric/dancer/new">New Run</Link>
                    </button>
                    <button>
                    <Link className="links" to="/">Locations</Link>
                    </button>
                    
                </div>
            );
        }
    }




    export default Dancer;
