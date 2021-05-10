import React, { useState, useEffect } from "react";

function Demo() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); //   function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

  const [fruit, setFruit] = useState("banana");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <div>
        <span>{fruit}</span>
        <button onClick={() => setFruit("apple")}>Apple</button>
      </div>
    </div>
  );
}

export default Demo;
