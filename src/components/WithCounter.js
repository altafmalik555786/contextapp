import React, { useState } from "react";

function withCounter(WrappedComponent) {
  const WithCounter= () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = ()=>{
        setCounter(counter+1)
    }
    return (
      <WrappedComponent
        counter={counter}
        incrementCounter={incrementCounter}
      />
    );
  }
  return WithCounter;
}

export default withCounter;
