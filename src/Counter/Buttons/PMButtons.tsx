import React from "react";
import "./PMButtons.css"

type PMButtonsPropsType = {
    title: "+" | "-"
    onClick: () => void
}

export const PMButtons = (props: PMButtonsPropsType) => {
    return (
        <span>
            <button
                onClick={props.onClick}
                className={props.title === "+" ? "green" : "red"}
            >{props.title}</button>
        </span>
    )
}