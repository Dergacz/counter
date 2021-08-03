import React, {ChangeEvent} from "react";
import {CounterMenuType} from "./CounterMenuContainer";
import style from "./CounterMenu.module.css";

export const CounterMenu = (props: CounterMenuType) => {

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber;
        const maxValue = props.maxValue;
        props.setMessage("enter values and press Set");
        props.setMinValue(value, true, true, false);

        if (value >= maxValue || value < 0 || maxValue < 0) {
            props.setError(true, true);
            props.setErrorMessage(true, "bad value");
        } else {
            props.setError(false, false);
        }
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber;
        const minValue = props.minValue;
        props.setMessage("enter values and press Set");
        props.setMaxValue(value, true, true, false);

        if (value <= minValue || value < 0 || minValue < 0) {
            props.setError(true, true);
            props.setErrorMessage(true, "bad value");
        } else {
            props.setError(false, false);
        }
    }

    const setMinValueHandler = () => {
        props.setMinValueToCounter(props.minValue, props.disableBtnInc, props.disableBtnRes, props.disableBtnSet)
    }

    return (
        <div className={style.menu}>
            <div>
                <span>start value </span>
                <input
                    type={"number"}
                    value={props.minValue}
                    onChange={minValueHandler}
                />
                <div>
                    {props.error && props.errorMessage}
                </div>

            </div>
            <div>
                <span>max value </span>
                <input
                    type={"number"}
                    value={props.maxValue}
                    onChange={maxValueHandler}
                />
                <div>
                    {props.error && props.errorMessage}
                </div>
            </div>
            <button
                className={style.btn}
                onClick={setMinValueHandler}
                disabled={props.error
                    ? true
                    : props.disableBtnSet
                }
            >Set
            </button>
        </div>
    )
}