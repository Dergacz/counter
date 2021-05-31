import React from "react";

type PMButtonsPropsType = {
    title: string
    onClick: () => void
}

export const PMButtons = (props: PMButtonsPropsType) => {
    return (
        <span>
            <button onClick={props.onClick}>{props.title}</button>
        </span>
    )
}