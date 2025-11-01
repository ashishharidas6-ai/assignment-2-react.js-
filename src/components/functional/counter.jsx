import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span className="count-value">{count}</span>
      <button className="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
