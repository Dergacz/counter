import React from "react";
import {CounterType} from "./CounterContainer";

export const Counter = (props: CounterType) => {

    const incValueHandler = () => {
        props.incValue()
    }

    const resetValueHandler = () => {
        props.resetValue()
    }

    return (
        <div>
            <div>{
                props.error
                    ? props.errorMessage
                    : props.disableBtnInc
                        ? props.message
                        : props.value
            }
            </div>
            <button
                disabled={props.value < props.maxValue || props.error
                    ? props.disableBtnInc
                    : !props.disableBtnInc
                }
                onClick={incValueHandler}
            >Inc
            </button>
            <button
                disabled={props.disableBtnRes}
                onClick={resetValueHandler}
            >Reset
            </button>
        </div>
    )
}