import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../store/reduxStore";
import {incValue, resetValue} from "../../store/counterReducer";

export const Counter = () => {
    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch();

    const incValueHandler = () => {
        dispatch(incValue())
    }

    const resetValueHandler = () => {
      dispatch(resetValue())
    }

    return (
        <div>
            <div>{value}</div>
            <button

                onClick={incValueHandler}>Inc</button>
            <button onClick={resetValueHandler}>Reset</button>
        </div>
    )
}