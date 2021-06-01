import React from "react";
import "./ResetButton.css"

type ResetPropsType = {
    resetCount: () => void
    value: number
    title: string
    editMode: boolean
}

export const ResetButton = (props: ResetPropsType) => {
    return (
        <div>
            <button
                onClick={() => props.resetCount()}
                disabled={props.editMode === true}
                    className={`${"ResetBtn"}
                    ${"resetRed"}`}
            >reset
            </button>
        </div>
    )
}