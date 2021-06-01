import React from "react";
import "./ResetButton.css"

type ResetPropsType = {
    resetCount: () => void
    value: number
}

export const ResetButton = (props: ResetPropsType) => {
    return (
        <div>
            <button
                onClick={() => props.resetCount()}
                    className={`${"ResetBtn"}
                    ${"resetRed"}`}
            >reset
            </button>
        </div>
    )
}