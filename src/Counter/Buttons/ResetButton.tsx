import React from "react";
import "./ResetButton.css"

type ResetPropsType = {
    resetCount: () => void
    title: number
}

export const ResetButton = (props: ResetPropsType) => {
    return (
        <div>
            <button onClick={() => props.resetCount()}
                    disabled={props.title === 0}
                    className={`${"ResetBtn"}
                    ${props.title !== 0 ? "resetRed" : ""}`}
            >reset
            </button>
        </div>
    )
}