type CounterInitialStateType = {
    value: number
    minValue: number
    maxValue: number
    error: string | null

}

const initialState: CounterInitialStateType = {
    value: 0,
    minValue: 0,
    maxValue: 1,
    error: null
}

type IncMinValueType = {
    type: "INC_MIN_VALUE_TYPE"
}

type DecMinValueType = {
    type: "DEC_MIN_VALUE_TYPE"
}

type IncMaxValueType = {
    type: "INC_MAX_VALUE_TYPE"
}

type DecMaxValueType = {
    type: "DEC_MAX_VALUE_TYPE"
}

type SetCountType = {
    type: "SET_COUNT_TYPE"
}


type ResetType = {
    type: "RESET"
}


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


export const incMinValue = (): IncMinValueType => {
    return {
        type: "INC_MIN_VALUE_TYPE"
    }
}

export const decMinValue = (): DecMinValueType => {
    return {
        type: "DEC_MIN_VALUE_TYPE"
    }
}

export const incMaxValue = (): IncMaxValueType => {
    return {
        type: "INC_MAX_VALUE_TYPE"
    }
}

export const decMaxValue = (): DecMaxValueType => {
    return {
        type: "DEC_MAX_VALUE_TYPE"
    }
}

export const setCount = (): SetCountType => {
    return {
        type: "SET_COUNT_TYPE"
    }
}

export const reset = (): ResetType => {
    return {
        type: "RESET"
    }
}

