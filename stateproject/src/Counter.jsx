import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((currectCount) => currectCount + 1);
  }
  return <div onClick={handleClick}>{counter}</div>;
}
