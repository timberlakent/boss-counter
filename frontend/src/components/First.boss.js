import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { userRun } from "../../../backend/models";
// let baseUrl = process.env.REACT_APP_BACKEND_PORT

export class FirstBoss extends Component {
    constructor(props){
        super(props);
            this.state = {
                userRun:[],
            }
        }
        componentDidMount() {
            this.getUserRun();
        }
        getUserRun = () =>{
            fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/cemetaryofash/Iudex-Gundyr`
            )
            .then((res)=>{
                if (res.status === 200){
                    return res.json();
                } else {
                    return[];
                }
            })
            .then((data)=>{
                this.setState({userRun: data.userRun});
            })
        }
        render() {
            return(
                
                <div className="firstboss">
                    <img src="data:image/jpeg;base64,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"></img>
                    <h1>Runs</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Run Number</th>
                                <th>Deaths</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.userRun.map((userRun)=>{
                                return (
                                    <tr key = {userRun._id}>
                                        <td>
                                            <Link to={`/delete/${userRun._id}`}>
                                                {userRun.name}
                                            </Link>
                                        </td>
                            
                                        <td>{userRun.runNumber}</td>
                                        <td>{userRun.deaths}</td>
                                        <td>{userRun.notes}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <button>
                    <Link to="new">New Run</Link>
                    </button>
                    <button>
                    <Link to="/">Locations</Link>
                    </button>
                </div>
            );
        }
    }




    export default FirstBoss;
