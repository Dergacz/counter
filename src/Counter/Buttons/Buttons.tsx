import React from "react";
import {IncButton} from "./IncButton";
import {ResetButton} from "./ResetButton";
import "./Buttons.css"

export type ButtonsPropsType = {
    newCount: () => void
    resetCount: () => void
    title: number
}

export const Buttons = (props: ButtonsPropsType) => {
    return(
        <div className={"Buttons"}>
    <IncButton newCount={props.newCount} title={props.title}/>
    <ResetButton resetCount={props.resetCount} title={props.title}/>
</div>
    )
}

