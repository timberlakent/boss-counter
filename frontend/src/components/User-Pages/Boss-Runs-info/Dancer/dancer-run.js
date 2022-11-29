import React, {Component} from "react";

// let baseUrl = process.env.REACT_APP_BACKEND_PORT

export class DancerNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            runNumber: "",
            deaths: "",
            notes: "",

        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
      };
      handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/highwalloflothric/dancer`,
        
          {
            method: "POST",
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
          <div className="vordt-Run">
            <h1>Create a new Dancer Run =></h1>
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
              <button>Add Run</button>
            </form>
          </div>
        );
      }
    }
    
    export default DancerNew;