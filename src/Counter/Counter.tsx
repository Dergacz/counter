import React from "react";
import {Output} from "./Output/Output";
import {Buttons} from "./Buttons/Buttons";
import "./Counter.css"
import {CounterMenu} from "./CounterMenu";

export type CounterPropsType = {
    value: number
    newCount: () => void
    resetCount: () => void
}

export const Counter = (props: CounterPropsType) => {
    return (
        <div>
            <div className={"CounterMenu"}>
                <CounterMenu/>
            </div>
            <div className={"CounterBody"}>
                <Output title={props.value}/>
                <Buttons newCount={props.newCount}
                         resetCount={props.resetCount}
                         value={props.value}
                         title={"inc"}
                />
            </div>
        </div>

    )

}