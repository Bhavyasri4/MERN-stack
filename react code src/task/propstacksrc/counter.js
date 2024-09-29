import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Increase Counter</button>
    </div>
  );
}
export default Counter;
