import React from "react";
import style from "./SetButton.module.css"

type SetButtonPropsType = {
    setCount: () => void
    minValue: number
    maxValue: number

}

export const SetButton = (props: SetButtonPropsType) => {

    return (
        <div>
            <button

                className={style.setBtn}
                disabled={props.minValue >= props.maxValue}
                onClick={props.setCount}>Set</button>
        </div>
    )
}