import { useState } from "react";

const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);

  function removeFirstElement() {
    setArray((currentArray) => currentArray.slice(1));
  }

  function removeSpecificLetter(letter) {
    setArray((currentArray) =>
      currentArray.filter((element) => element !== letter)
    );
  }
  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }
  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  return (
    <div>
      <button onClick={removeFirstElement}> Remove First Element</button>
      <br></br>
      <button onClick={() => removeSpecificLetter("B")}> Remove all B's</button>
      <br></br>
      <button onClick={() => addLetterToStart("B")}> Add to start</button>
      <br></br>
      <button onClick={() => addLetterToEnd("B")}> Add To End</button>
      <br></br>
      <button onClick={clear}> clear</button>
      <br></br>
      <button onClick={reset}> reset</button>
      <br></br>
      {array.join(",")}
    </div>
  );
}

export default App;
