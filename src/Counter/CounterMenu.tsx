import React, {useEffect, useState} from "react";
import "./CounterMenu.css"

export const CounterMenu = () => {

    let [minValue, setMinValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(0);

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



    return (
        <div>
            <div>
                <span>
                   <span>start value</span>
                <input

                    className={
                        minValue <= maxValue || minValue < 0
                        ? "input"
                        : ""
                    }
                    value={minValue}
                />
                    <button onClick={incMinValue}>+</button>
                    <button onClick={decMinValue}>-</button>
                </span>

            </div>
            <div>
                <span>
                     <span>max value</span>
                <input value={maxValue}/>
                    <button onClick={incMaxValue}>+</button>
                    <button onClick={decMaxValue}>-</button>
                </span>

            </div>
            <button>SET</button>
        </div>
    )
}