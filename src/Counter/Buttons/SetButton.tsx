import React from "react";

type SetButtonPropsType = {
    count: number
    minValue: number

}

export const SetButton = (props: SetButtonPropsType) => {

    const setCount = () => {
        props.count = props.minValue
    }

    return (
        <div>
            <button onClick={setCount}>Set</button>
        </div>
    )
}