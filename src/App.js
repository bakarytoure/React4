import "./App.css";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDecrease = () => {
    console.log("called first:", this.state.count);
    this.setState(
      (state, props) => {
        return {
          count: this.state.count - props.amount
        };
      },
      () => console.log("caled second:", this.state.count)
    );

    console.log("called second:", this.state.count);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.handleDecrease}>
            decrease
          </button>
          <span style={{ margin: "1rem" }}>Count:{this.state.count}</span>
          <button type="button" onClick={this.handleIncrease}>
            increase
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default class App extends Component {
  render() {
    return <Counter amount="2" />;
  }
}
