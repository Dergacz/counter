import React, {useEffect, useState} from "react";
import "./App.css";
import {Counter} from "./Counter/Counter";

export function App() {

    let [minValue, setMinValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(0);

    let [count, setCount] = useState<number>(minValue);
    let [editMode, setEditMode] = useState<boolean>(false);

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
        localStorage.setItem("maxValueKey", JSON.stringify(maxValue));
        localStorage.setItem("minValueKey", JSON.stringify(minValue));
        setEditMode(true);
    }, [maxValue, minValue]);


    const newCount = () => {
        count < maxValue ? setCount(++count) : setCount(maxValue);
    }
    const resetCount = () => {
        setCount(minValue);
        setEditMode(false);
    }

    let title;
    if (minValue >= maxValue || minValue < 0 || maxValue < 0) {
        title = "Incorrect value";
    } else {
        title = "Enter values and press 'set'";
    }

    return (
        <div className="App">
            <Counter
                value={count}
                title={title}
                minValue={minValue}
                maxValue={maxValue}
                newCount={newCount}
                resetCount={resetCount}
                incMinValue={incMinValue}
                decMinValue={decMinValue}
                incMaxValue={incMaxValue}
                decMaxValue={decMaxValue}
                editMode={editMode}
            />
        </div>
    );
}


