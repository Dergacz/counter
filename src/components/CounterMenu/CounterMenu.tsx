import React, {ChangeEvent} from "react";
import {SetButton} from "./SetButton";
import {CounterMenuType} from "./CounterMenuContainer";

export const CounterMenu = (props: CounterMenuType) => {
    
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setMinValue(e.currentTarget.valueAsNumber, true, true)
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber, true, true)
    }
    return (
        <div>
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
        </div>
    )
}