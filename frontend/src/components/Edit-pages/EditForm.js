import React, {Component} from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

// let baseUrl = process.env.REACT_APP_BACKEND_PORT

export class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            runNumber: "",
            deaths: "",
            notes: "",

        }
    }
    componentDidMount(){
        const { id } = this.props.params;
        this.getUserRun(id);

    }
    getUserRun = (id) =>{
        fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/cemetaryofash/Iudex-Gundyr/${id}`)
         .then((res)=>{
            if(res.status === 200) {
                return res.json();
            }else {
                return [];
            }
        })
        .then((data)=>{
            // this.setState({userRun: data.userRun});
            this.setState({
                name: data.userRun.name,
                runNumber: data.userRun.runNumber,
                deaths: data.userRun.deaths,
                notes: data.userRun.notes,
            })
        })
    
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
      };
      handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.params;
        fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/cemetaryofash/Iudex-Gundyr/${id}`,
        
          {
            method: "PUT",
            body: JSON.stringify({
              name: this.state.name,
              runNumber: this.state.runNumber,
              deaths: this.state.deaths,
              notes: this.state.notes,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => {
          if (response.status === 200) {
            window.location.href = window.location.href.split("new")[0];
          }
        });
        
      };
      
      render() {
        return (
          <div className="new-page">
            <h1>Edit {this.state.name}'s Run </h1>
            <form className="New-run-form" onSubmit={this.handleSubmit}>
              <label>
                <p>Run Name:</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={this.state.name}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Run Name"
                />
              </label>
              <label>
                <p>Run Number:</p>
                <input
                  type="number"
                //   required
                  name="runNumber"
                  value={this.state.runNumber}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Run Number"
                />
              </label>
              <label>
                <p>Deaths:</p>
                <input
                  type="number"
                  // required
                  name="deaths"
                  value={this.state.deaths}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Times you Died?"
                />
              </label>
              <label>
                <p>Notes:</p>
                <input
                  type="text"
                  // required
                  name="notes"
                  value={this.state.notes}
                  onChange={(e) => this.handleChange(e)}
                  placeholder="Notes for improvement"
                />
              </label>
              <button>Edit Run</button>
              <button>
                <Link to="/">
                    Home
                </Link>
              </button>
              <button>
                <Link to="/first">
                    Runs
                </Link>
              </button>
            </form>
          </div>
        );
      }
    }
    
    export default withParams(EditForm);