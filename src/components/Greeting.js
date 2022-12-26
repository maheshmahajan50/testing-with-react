import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World</h1>
      {changedText ? (
        <Output>Changed!</Output>
      ) : (
        <Output>It's good to see you !!!</Output>
      )}
      <button onClick={changeTextHandler}>Click me</button>
    </div>
  );
};

export default Greeting;
