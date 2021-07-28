import React from "react";
import "./App.css";
import {Counter} from "./components/Counter/Counter";
import CounterMenuContainer from "./components/CounterMenu/CounterMenuContainer";


function App() {


    return (
        <div className="App">
            <CounterMenuContainer/>
            <Counter/>
        </div>
    );
}

export default App;
