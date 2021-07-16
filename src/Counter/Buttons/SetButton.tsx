import React from "react";
import "./SetButton.css"

type SetButtonPropsType = {
    setCount: () => void

}

export const SetButton = (props: SetButtonPropsType) => {

    return (
        <div>
            <button
                className={"setBtn"}
                onClick={props.setCount}>Set</button>
        </div>
    )
}