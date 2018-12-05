import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5
    };
  }
  incrementCount = () => {
    this.setState(state => ({
          count: this.state.count +1
        }));
        alert("hi anna");
  }
  render() {
    return (
      <div className="Counter">
        <h1>{this.state.count}</h1>
          <button onClick={this.incrementCount}>
            ClIcK Me
          </button>
      </div>
    );
  }
}
export default Counter;
