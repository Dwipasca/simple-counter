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
      <h1 data-testid="title">Counter</h1>
      <h1 data-testid="counter">{counter}</h1>
      <button onClick={handlerSubtractCounter} data-testid="btn-subtract">
        -
      </button>
      <input
        type="number"
        onChange={handlerInputValue}
        value={inputValue}
        data-testid="input"
      />
      <button onClick={handlerAddCounter} data-testid="btn-add">
        +
      </button>
    </div>
  );
}

export default App;
