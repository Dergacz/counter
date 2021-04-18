import React from "react";
import {action} from "@storybook/addon-actions";
import {Buttons} from "./Buttons";
import {IncButton} from "./IncButton";
import {ResetButton} from "./ResetButton";

export default {
    title: "Buttons",
    component: Buttons
}

const clickButton = action("Button click");

export const plusButton = () => {
    return (
        <IncButton newCount={clickButton} title={0}/>
    )
}

export const DesebleResetButton = () => {
    return (
        <ResetButton resetCount={clickButton} title={0}/>
    )
}

export const resetButton = () => {
    return (
        <ResetButton resetCount={clickButton} title={1}/>
    )
}