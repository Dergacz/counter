import React from "react";
import {Counter} from "./Counter";
import {action} from "@storybook/addon-actions";

export default {
    title: "Counter",
    component: Counter
}

const incCount = action("count +1");
const resetCount = action("reset count")

export const ZeroCounter = () => {
    return (
        <Counter
            value={0}
            newCount={incCount}
            resetCount={resetCount}/>
    )
}
export const NumCounter = () => {
    return (
        <Counter
            value={1}
            newCount={incCount}
            resetCount={resetCount}/>
    )
}
export const MaxCounter = () => {
    return (
        <Counter
            value={5}
            newCount={incCount}
            resetCount={resetCount}/>
    )
}