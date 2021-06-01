import React from "react";
import "./Output.css";

export type OutputPropsType = {
    title: string
    value: number
    maxValue: number
    editMode: boolean
}

export const Output = (props: OutputPropsType) => {
    return (
        <div className={"output"}>
            <h2 className = {
                props.value === props.maxValue
                ? "red"
                : ""
            }>
                {!props.editMode ? props.value : props.title}
            </h2>
        </div>
    )
}