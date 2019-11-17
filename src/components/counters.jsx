import React, { Component } from "react";
import Counter from "./counter.jsx";

class Counters extends Component {
  render() {
    //  **** Destructing Arguments ****
    const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    // --> That's how you destruct the props .. now we can delete any 'this.props' from our return function
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
