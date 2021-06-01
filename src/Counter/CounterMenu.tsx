import React, {useEffect, useState} from "react";
import "./CounterMenu.css"
import {PMButtons} from "./Buttons/PMButtons";
import {SetButton} from "./Buttons/SetButton";

type CounterMenuPropsType = {
    value: number
    minValue: number
    maxValue: number
    incMinValue: () => void
    decMinValue: () => void
    incMaxValue: () => void
    decMaxValue: () => void

}

export const CounterMenu = (props: CounterMenuPropsType) => {

    return (
        <div>
            <div>
                <span>
                   <span>start value</span>
                <input
                    value={props.minValue}
                    className={
                        props.minValue >= props.maxValue || props.minValue < 0
                            ? "input"
                            : ""
                    }
                />
                    <PMButtons title={"+"} onClick={props.incMinValue}/>
                    <PMButtons title={"-"} onClick={props.decMinValue}/>
                </span>

            </div>
            <div>
                <span>
                     <span>max value</span>
                <input
                    className={
                        props.minValue >= props.maxValue || props.maxValue < 0
                            ? "input"
                            : ""
                    }
                    value={props.maxValue}
                />
                    <PMButtons title={"+"} onClick={props.incMaxValue}/>
                    <PMButtons title={"-"} onClick={props.decMaxValue}/>
                </span>

            </div>
            <SetButton count={props.value} minValue={props.minValue}/>
        </div>
    )
}