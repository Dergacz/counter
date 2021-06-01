import React from "react";
import {IncButton} from "./IncButton";
import {ResetButton} from "./ResetButton";
import "./Buttons.css"

export type ButtonsPropsType = {
    newCount: () => void
    resetCount: () => void
    value: number
    title: string
    maxValue: number
    editMode: boolean
}

export const Buttons = (props: ButtonsPropsType) => {
    return(
        <div className={"Buttons"}>
    <IncButton
        newCount={props.newCount}
        value={props.value}
        title={props.title}
        maxValue={props.maxValue}
        editMode={props.editMode}
    />
    <ResetButton
        resetCount={props.resetCount}
        value={props.value}
        title={props.title}
        editMode={props.editMode}
    />
</div>
    )
}

