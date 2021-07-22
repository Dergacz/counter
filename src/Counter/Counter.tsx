import React from "react";
import {Output} from "./Output/Output";
import {Buttons} from "./Buttons/Buttons";
import "./Counter.css"
import {CounterMenu} from "./CounterMenu";
import CounterMenuContainer from "./CounterMenuContainer";

export type CounterPropsType = {
    value: number
    title: string
    minValue: number
    maxValue: number
    editMode: boolean
    newCount: () => void
    resetCount: () => void
    incMinValue: () => void
    decMinValue: () => void
    incMaxValue: () => void
    decMaxValue: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div>
            <div className={"CounterMenu"}>
                <CounterMenuContainer />
            </div>
            <div className={"CounterBody"}>
                <Output
                    value={props.value}
                    maxValue={props.maxValue}
                    title={props.title}
                    editMode={props.editMode}
                />
                <Buttons
                    newCount={props.newCount}
                    resetCount={props.resetCount}
                    value={props.value}
                    title={"inc"}
                    maxValue={props.maxValue}
                    editMode={props.editMode}
                />
            </div>
        </div>

    )

}