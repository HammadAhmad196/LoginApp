import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    email: "",
    password: ""
  }
  setPassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  setEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  logIn = () => {
    alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`)
  }
  render() {
    return (
      <div className ="App">
        <form>
          <input
            onChange={(event)=>this.setEmail(event)}
            style={{
              margin: 15
            }}
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
          /><br />
          <input
            onChange={(event)=>this.setPassword(event)}
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password"
          /><br />
          <button
            style={{
              margin: 15
            }}
            onClick={this.logIn}
          >Login</button>
        </form>
      </div>
    );
  }
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
