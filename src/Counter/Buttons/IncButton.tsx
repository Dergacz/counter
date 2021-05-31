import React from "react";
import "./IncButton.css"

type IncPropsType = {
    newCount: () => void
    value: number
    title: string
}

export const IncButton = (props: IncPropsType) => {
    return (
        <div>
            <button onClick={() => props.newCount()}
                    disabled={props.value === 5}
                    className={`${"IncBtn"} 
                    ${props.value < 5 ? "IncGreen" : ""}`}>{props.title}
            </button>
        </div>
    )
}