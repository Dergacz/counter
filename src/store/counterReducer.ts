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

type IncType = {
    type: "INC"
}

type ResetType = {
    type: "RESET"
}

type MaxValue = {
    type: "MAX_VALUE"
}

type ActionsType = IncType | ResetType | MaxValue

export const counterReducer = (state: CounterInitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "RESET": {
            return {
                ...state,
                value: state.minValue
            }
        }
        case "MAX_VALUE": {
            return {
                ...state,

            }
        }

    }

}