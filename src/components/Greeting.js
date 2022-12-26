import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World</h1>
      {changedText ? <p>Changed!</p> : <p>It's good to see you !!!</p>}
      <button onClick={changeTextHandler}>Click me</button>
    </div>
  );
};

export default Greeting;
