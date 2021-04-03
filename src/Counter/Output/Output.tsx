import React from "react";
import "./Output.css";

export type OutputPropsType = {
    title: number
}

export const Output = (props: OutputPropsType) => {
    return (
        <div className={"output"}>
            <h2 className={props.title === 5 ? "red" : ""}>{props.title}</h2>
        </div>
    )
}