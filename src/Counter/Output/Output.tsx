import React from "react";
import "./Output.css";

export type OutputPropsType = {
    value: number
    maxValue: number
}

export const Output = (props: OutputPropsType) => {
    return (
        <div className={"output"}>
            <h2 className = {
                props.value === props.maxValue
                ? "red"
                : ""
            }>
                {props.value}
            </h2>
        </div>
    )
}