import React, {ChangeEvent} from "react";
import {CounterMenuType} from "./CounterMenuContainer";
import style from "./CounterMenu.module.css";

export const CounterMenu = (props: CounterMenuType) => {
    
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setMinValue(e.currentTarget.valueAsNumber, true, true, false)
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber, true, true, false)
    }

    const setMinValueHandler = () => {
        props.setMinValueToCounter(props.minValue, false, false, false)
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
            </div>
            <div>
                <span>max value </span>
                <input
                    type={"number"}
                    value={props.maxValue}
                    onChange={maxValueHandler}
                />
            </div>
            <button
                className={style.btn}
                onClick={setMinValueHandler}>Set</button>
        </div>
    )
}