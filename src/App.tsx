import React, {useEffect, useState} from "react";
import "./App.css";
import {Counter} from "./Counter/Counter";

export function App() {

    let [minValue, setMinValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(0);

    let [count, setCount] = useState<number>(minValue);

    const incMinValue = () => {
        setMinValue(minValue + 1)
    }

    const decMinValue = () => {
        setMinValue(minValue - 1);
    }

    useEffect(() => {
        let minValueAsString = localStorage.getItem("minValueKey");
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString);
            setMinValue(newMinValue);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("minValueKey", JSON.stringify(minValue))
    }, [minValue]);

    const incMaxValue = () => {
        setMaxValue(maxValue + 1)
    }

    const decMaxValue = () => {
        setMaxValue(maxValue - 1);
    }

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValueKey");
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString);
            setMaxValue(newMaxValue);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("maxValueKey", JSON.stringify(maxValue))
    }, [maxValue]);


    const newCount = () => {
        count < maxValue ? setCount(++count) : setCount(maxValue)
    }
    const resetCount = () => {
        setCount(minValue);
    }


    return (
        <div className="App">
            <Counter
                value={count}
                minValue={minValue}
                maxValue={maxValue}
                newCount={newCount}
                resetCount={resetCount}
                incMinValue={incMinValue}
                decMinValue={decMinValue}
                incMaxValue={incMaxValue}
                decMaxValue={decMaxValue}
            />
        </div>
    );
}


