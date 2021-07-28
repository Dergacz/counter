const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 5,
    disableBtnInc: true,
    disableBtnRes: true,
    disableBtnSet: false
}
type CounterInitialStateType = typeof initialState

export type ActionType = IncValueActionType
    | SetMaxValueActionType
    | SetMinValueActionType
    | ResetValueActionType
    | SetMinValueToCounterActionType


export const counterReducer = (state: CounterInitialStateType = initialState, action: ActionType): CounterInitialStateType => {
    switch (action.type) {
        case "INC_VALUE": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "SET_MIN_VALUE": {
            return {
                ...state,
                minValue: action.minValue,
                disableBtnInc: state.disableBtnInc,
                disableBtnRes: state.disableBtnRes,

            }
        }
        case "SET_MAX_VALUE": {
            return {
                ...state,
                maxValue: action.maxValue,
                disableBtnInc: state.disableBtnInc,
                disableBtnRes: state.disableBtnRes
            }
        }
        case "SET_MIN_VALUE_TO_COUNTER": {
            return {
                ...state,
                value: state.minValue,
                disableBtnInc: !state.disableBtnInc,
                disableBtnRes: !state.disableBtnRes
            }
        }
        case "RESET_VALUE": {
            return {
                ...state,
                value: state.minValue
            }
        }
        default:
            return state
    }
}

export const incValue = () => ({type: "INC_VALUE"} as const);
export type IncValueActionType = ReturnType<typeof incValue>

export const setMaxValue = (maxValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => ({
    type: "SET_MAX_VALUE",
    maxValue,
    disableBtnInc,
    disableBtnRes,
    disableBtnSet
} as const);
export type SetMaxValueActionType = ReturnType<typeof setMaxValue>

export const setMinValue = (minValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => ({
    type: "SET_MIN_VALUE",
    minValue,
    disableBtnInc,
    disableBtnRes,
    disableBtnSet
} as const);
export type SetMinValueActionType = ReturnType<typeof setMinValue>

export const setMinValueToCounter = (minValue: number, disableBtnInc: boolean, disableBtnRes: boolean, disableBtnSet: boolean) => ({
    type: "SET_MIN_VALUE_TO_COUNTER",
    minValue,
    disableBtnInc,
    disableBtnRes,
    disableBtnSet
} as const);
export type SetMinValueToCounterActionType = ReturnType<typeof setMinValueToCounter>


export const resetValue = () => ({type: "RESET_VALUE"} as const);
export type ResetValueActionType = ReturnType<typeof resetValue>