import React, {Component, useState} from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.intervalId = null;
    this.state = {
      time: ""
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({time: new Date().toLocaleDateString()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time}</h3>
      </div>
    );
  }
}

export default App;
