import React from "react";
import "./App.css";
import CounterMenuContainer from "./components/CounterMenu/CounterMenuContainer";
import CounterContainer from "./components/Counter/CounterContainer";


function App() {


    return (
        <div className="App">
            <CounterMenuContainer/>
            <CounterContainer/>
        </div>
    );
}

export default App;
