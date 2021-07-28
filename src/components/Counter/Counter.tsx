import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/reduxStore";
import {incValue, resetValue} from "../../store/counterReducer";
import {CounterType} from "./CounterContainer";

export const Counter = (props: CounterType) => {

    const incValueHandler = () => {
        props.incValue()
    }

    const resetValueHandler = () => {
        props.resetValue()
    }

    return (
        <div>
            <div>{props.value}</div>
            <button
                disabled={props.value === props.maxValue}
                onClick={incValueHandler}
            >Inc
            </button>
            <button
                onClick={resetValueHandler}
            >Reset
            </button>
        </div>
    )
}