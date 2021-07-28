import React from "react";
import {useDispatch} from "react-redux";

type SetButtonPropsType = {
    value: number
}


export const SetButton = (props: SetButtonPropsType) => {
    const dispatch = useDispatch();


    return (
        <div>
            <button>Set</button>
        </div>
    )
}