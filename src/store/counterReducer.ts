const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 5,
    disableBtnInc: true,
    disableBtnRes: true,
    disableBtnSet: false,
    error: false,
    errorMessage: "",
    message: ""
}
type CounterInitialStateType = typeof initialState

export type ActionType = IncValueActionType
    | SetMaxValueActionType
    | SetMinValueActionType
    | ResetValueActionType
    | SetMinValueToCounterActionType
    | SetErrorActionType
    | SetErrorMessageActionType
    | SetMessageActionType
    | SetDisableIncResetActionType


export const counterReducer = (state: CounterInitialStateType = initialState, action: ActionType): CounterInitialStateType => {
    switch (action.type) {
        case "INC_VALUE": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "RESET_VALUE": {
            return {
                ...state,
                value: state.minValue
            }
        }
        case "SET_MIN_VALUE": {
            return {
                ...state,
                minValue: action.minValue,
                disableBtnInc: action.disableBtnInc,
                disableBtnRes: action.disableBtnRes,
                disableBtnSet: action.disableBtnSet

            }
        }
        case "SET_MAX_VALUE": {
            return {
                ...state,
                maxValue: action.maxValue,
                disableBtnInc: action.disableBtnInc,
                disableBtnRes: action.disableBtnRes,
                disableBtnSet: action.disableBtnSet
            }
        }
        case "SET_MIN_VALUE_TO_COUNTER": {
            return {
                ...state,
                value: action.minValue,
                disableBtnInc: action.disableBtnInc,
                disableBtnRes: action.disableBtnRes,
                disableBtnSet: action.disableBtnSet
            }
        }
        case "SET_ERROR": {
            return {
                ...state,
                error: action.error,
                disableBtnSet: action.disableBtnSet
            }
        }
        case "SET_ERROR_MESSAGE": {
            return {
                ...state,
                error: action.error,
                errorMessage: action.errorMessage
            }
        }
        case "SET_MESSAGE": {
            return {
                ...state,
                message: action.message
            }
        }
        case "SET_DISABLE_INC_RES": {
            return {
                ...state,
                disableBtnInc: !action.disableBtnInc,
                disableBtnRes: !action.disableBtnRes
            }
        }
        default:
            return state
    }
}

export const incValue = () => ({type: "INC_VALUE"} as const);
export type IncValueActionType = ReturnType<typeof incValue>

export const resetValue = () => ({type: "RESET_VALUE"} as const);
export type ResetValueActionType = ReturnType<typeof resetValue>

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

export const setError = (error: boolean, disableBtnSet: boolean) => ({
    type: "SET_ERROR",
    error,
    disableBtnSet
} as const);
export type SetErrorActionType = ReturnType<typeof setError>

export const setErrorMessage = (error: boolean, errorMessage: string) => ({
    type: "SET_ERROR_MESSAGE",
    error,
    errorMessage
} as const);
export type SetErrorMessageActionType = ReturnType<typeof setErrorMessage>

export const setMessage = (message: string) => ({
    type: "SET_MESSAGE",
    message
} as const);
export type SetMessageActionType = ReturnType<typeof setMessage>

export const setDisableIncReset = (disableBtnInc: boolean, disableBtnRes: boolean) => ({
    type: "SET_DISABLE_INC_RES",
    disableBtnInc,
    disableBtnRes
} as const);
export type SetDisableIncResetActionType = ReturnType<typeof setDisableIncReset>