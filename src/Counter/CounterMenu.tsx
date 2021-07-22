import React from "react";
import "./CounterMenu.css"
import {PMButtons} from "./Buttons/PMButtons";
import {SetButton} from "./Buttons/SetButton";
import {CounterMenuType} from "./CounterMenuContainer";


export const CounterMenu = (props: CounterMenuType) => {

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
            <SetButton
                minValue={props.minValue}
                maxValue={props.maxValue}
                setCount={props.setCount}
            />
        </div>
    )
}