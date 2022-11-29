import React, {Component} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()}/>;
};


export class DancerPersonalRun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            runNumber: "",
            deaths: "",
            notes: "",
        }
    }
    componentDidMount() {
        const {id} = this.props.params;
        this.getDancerRun(id);
    }
    getDancerRun = (id) =>{
        fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/highwalloflothric/dancer/${id}`)
        .then((res)=>{
            if(res.status === 200){
                return res.json();
            }else {
                return [];
            }
        })
        .then((data)=>{
            this.setState({
                name: data.dancerRun.name,
                runNumber: data.dancerRun.runNumber,
                deaths: data.dancerRun.deaths,
                notes: data.dancerRun.notes,
            })
        })
    }
    handleDelete=()=>{
        const { id } = this.props.params;
        fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/highwalloflothric/dancer/${id}`,
        {
        method: "DELETE",
    }
        ).then((response)=>{
            if(response.status === 200){
                window.location.href = "/highwalloflothric/dancer";
            }
        })
}
render() {
    return(
        <>
        <div className ="vordt-Run">
            <h1>{this.state.name}'s Run</h1>
            <table border="0" cellSpacing="0" cellPadding="0">
                <tbody>
                    <tr>
                        <td width={"44%"}>
                            <h2>Run Number</h2>
                            {this.state.runNumber}
                        </td>
                        <td width={"44%"}>
                            <h2>Deaths</h2>
                            {this.state.deaths}
                        </td>
                        <td width={"44%"}>
                            <h2>Notes</h2>
                            {this.state.notes}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="links">
                 <Link className="edit" to={`/highwalloflothric/dancer/${this.props.params.id}`}>
                    Edit
                </Link> 
                 <Link className="delete" onClick={this.handleDelete} to={"/highwalloflothric/dancer"}>
                    Delete
                </Link> 
            </div>
        </div>
        </>
    )
}
}

export default withParams(DancerPersonalRun);