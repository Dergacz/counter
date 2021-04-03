import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

  let [count, setCount] = useState<number>(0);

  const newCount = () => {
    count < 5 ? setCount(++count) : setCount(5)
  }
  const resetCount = () => {
    setCount(0)
  }

  let title = count
  return (
      <div className="App">
        <Counter title={title}
                 newCount={newCount}
                 resetCount={resetCount}/>
      </div>
  );
}

export default App;
