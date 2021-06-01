import React from "react";
import "./IncButton.css"

type IncPropsType = {
    newCount: () => void
    value: number
    title: string
    maxValue: number
    editMode: boolean
}

export const IncButton = (props: IncPropsType) => {
    return (
        <div>
            <button
                onClick={() => props.newCount()}
                disabled={props.value === props.maxValue || props.editMode === true}
                className={`${"IncBtn"} 
                    ${props.value < props.maxValue ? "IncGreen" : ""}`}
            >{props.title}
            </button>
        </div>
    )
}