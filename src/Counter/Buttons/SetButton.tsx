import React from "react";

type SetButtonPropsType = {
    setCount: () => void

}

export const SetButton = (props: SetButtonPropsType) => {

    return (
        <div>
            <button onClick={props.setCount}>Set</button>
        </div>
    )
}