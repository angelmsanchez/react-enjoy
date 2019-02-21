import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="header">
      <button
        id="increment-button"
        className="btn-success"
        onClick={add}
        // onClick={this.props.incrementCounter}
      >
        Increment
      </button>
      {/* <button onClick={this.props.decrementCounter}> */}
      <button onClick={minus}>Decrement</button>
      {/* <p>Counter: {this.props.counter}</p> */}
      <p>Counter: {count}</p>
    </div>
  );
}
