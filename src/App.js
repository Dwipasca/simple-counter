import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handlerInputValue = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  const handlerAddCounter = () => {
    setCounter(counter + inputValue);
  };
  const handlerSubtractCounter = () => {
    setCounter(counter - inputValue);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={handlerSubtractCounter}>-</button>
      <input type="number" onChange={handlerInputValue} value={inputValue} />
      <button onClick={handlerAddCounter}>+</button>
    </div>
  );
}

export default App;
