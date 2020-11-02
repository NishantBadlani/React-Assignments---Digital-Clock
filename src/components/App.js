import React, {Component, useState} from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    this.state = {
      time: ""
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({time: new Date().toLocaleDateString("en-US")});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="App">
        <div className="Clock">
          <h3 id="time">{this.state.time}</h3>
        </div>
      </div>
    );
  }
}

export default App;
