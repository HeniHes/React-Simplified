import { useState } from "react";
import { Counter } from "./Counter";

function App() {
  const [name, setName] = useState("Heni");
  // const [age, setAge] = useState(27);

  // function handleClick() {
  //   setName("Hcini");
  //   setAge((currentAge) => {
  //     return currentAge + 1;
  //   });
  //   setAge((currentAge) => {
  //     return currentAge + 1;
  //   });
  // }
  console.log(name);

  return (
    <input
      type="text"
      value={name}
      onChange={(ed) => setName(ed.target.value)}
    ></input>
  );
}

export default App;
