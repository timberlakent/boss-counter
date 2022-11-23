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
                <div>
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
