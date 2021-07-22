const initialState = {
    value: 0,
    minValue: 0,
    maxValue: 1,
    error: null
}
type CounterInitialStateType = typeof initialState


type ActionsType = IncMinValueType
    | ResetType
    | DecMinValueType
    | IncMaxValueType
    | DecMaxValueType
    | SetCountType

export const counterReducer = (state: CounterInitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INC_MIN_VALUE_TYPE": {
            return {
                ...state,
                minValue: state.minValue + 1
            }
        }
        case "DEC_MIN_VALUE_TYPE": {
            return {
                ...state,
                minValue: state.minValue - 1
            }
        }
        case "INC_MAX_VALUE_TYPE": {
            return {
                ...state,
                maxValue: state.maxValue + 1
            }
        }
        case "DEC_MAX_VALUE_TYPE": {
            return {
                ...state,
                maxValue: state.maxValue - 1
            }
        }
        case "SET_COUNT_TYPE": {
            return {
                ...state,
                value: state.value
            }
        }
        case "RESET": {
            return {
                ...state,
                value: state.minValue
            }
        }
        default: {
            return state
        }
    }

}


export const incMinValue = () => ({type: "INC_MIN_VALUE_TYPE"} as const)
export type IncMinValueType = ReturnType<typeof incMinValue>

export const decMinValue = () => ({type: "DEC_MIN_VALUE_TYPE"} as const)
export type DecMinValueType = ReturnType<typeof decMinValue>


export const incMaxValue = () => ({type: "INC_MAX_VALUE_TYPE"} as const)
export type IncMaxValueType = ReturnType<typeof incMaxValue>

export const decMaxValue = () => ({type: "DEC_MAX_VALUE_TYPE"} as const)
export type DecMaxValueType = ReturnType<typeof decMaxValue>


export const setCount = () => ({type: "SET_COUNT_TYPE"} as const)
export type SetCountType = ReturnType<typeof setCount>

export const reset = () => ({type: "RESET"} as const)
export type ResetType = ReturnType<typeof reset>
