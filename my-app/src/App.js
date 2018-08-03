import React, { Component } from "react";

import { fetchSeries, postLogin, postSignIn, verifyToken } from "./api";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      series: [],
      token: null
    };
  }

  componentDidMount() {
    fetchSeries().then(data => {
      console.log("data: ", data);

      this.setState({
        series: data
      });
    });
  }

  handleLogin = () => {
    console.log("handleLogin");
    const data = { email: "user@example.com", password: "1234" };

    postLogin({ data }).then(response => {
      console.log("postLogin response: ", response);
      this.setState({
        token: response
      });
    });
  };

  handleSignIn = () => {
    console.log("handleSignIn");
    const data = { email: "duffy@example.com", password: "1234" };

    postSignIn({ data }).then(response => {
      console.log("postSignIn response: ", response);
    });
  };

  handleVerifyToken = () => {
    console.log("handleVerifyToken");

    verifyToken({ token: this.state.token }).then(response => {
      console.log("response: ", response);
    });
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.series.map((item, index) => {
            return <li key={`item-${index}`}>{item.nombre}</li>;
          })}
        </ul>

        <button type="button" onClick={this.handleLogin}>
          Login
        </button>
        <button type="button" onClick={this.handleSignIn}>
          Sign in
        </button>
        {this.state.token && (
          <button type="button" onClick={this.handleVerifyToken}>
            VerifyToken
          </button>
        )}
      </div>
    );
  }
}

export default App;
