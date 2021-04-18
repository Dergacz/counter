import React, {useState} from "react";
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
            title={0}
            newCount={incCount}
            resetCount={resetCount}/>
    )
}
export const NumCounter = () => {
    return (
        <Counter
            title={1}
            newCount={incCount}
            resetCount={resetCount}/>
    )
}
export const MaxCounter = () => {
    return (
        <Counter
            title={5}
            newCount={incCount}
            resetCount={resetCount}/>
    )
}