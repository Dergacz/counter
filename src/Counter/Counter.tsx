import React from "react";
import {Output} from "./Output/Output";
import {Buttons} from "./Buttons/Buttons";
import "./Counter.css"

export type CounterPropsType = {
    title: number
    newCount: () => void
    resetCount: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div className={"CounterBody"}>
            <Output title={props.title}/>
            <Buttons newCount={props.newCount}
                     resetCount={props.resetCount}
                     title={props.title}
            />
        </div>
    )


}