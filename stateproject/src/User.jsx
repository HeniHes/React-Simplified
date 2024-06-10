import { useState, useEffect } from "react";

export function User() {
  const [name, setName] = useState("h");
  const [age, setAge] = useState(0);

  function minus() {
    setAge((currentAge) => {
      return currentAge - 1;
    });
  }

  function plus() {
    setAge((currentAge) => {
      return currentAge + 1;
    });
  }
  useEffect(() => {
    console.log("age changed", age);
  }, [age]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <button onClick={minus}> - </button>
      {age}
      <button onClick={plus}>+ </button>
      <br />
      <div>
        {" "}
        my name is {name} and I am {age} years old
      </div>
    </div>
  );
}
