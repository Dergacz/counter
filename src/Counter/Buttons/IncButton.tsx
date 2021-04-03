import React from "react";
import "./IncButton.css"

type IncPropsType = {
    newCount: () => void
    title: number
}

export const IncButton = (props: IncPropsType) => {
    return (
        <div>
            <button onClick={() => props.newCount()}
                    disabled={props.title === 5}
                    className={`${"IncBtn"} 
                    ${props.title < 5 ? "IncGreen" : ""}`}>inc
            </button>
        </div>
    )
}