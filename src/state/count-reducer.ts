type InitialStateType = {
    count: number | string
    disabled: boolean
    resetDisabled: boolean
    countcolor: string
    inputStartValue: string
    inputMaxValue: string
    disabledSet: boolean
    maxNumberColor: string
    startNumberColor: string
}


let initialState: InitialStateType = {
    count: 0,
    disabled: false,
    resetDisabled: true,
    countcolor: 'count',
    inputStartValue: '0',
    inputMaxValue: '5',
    disabledSet: true,
    maxNumberColor: 'toNumber',
    startNumberColor: 'fromNumber'
}


export const countReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-COUNT': {
            if (action.count === Number(state.inputMaxValue)) {
                return {
                    ...state,
                    count: action.count,
                    disabled: true,
                    resetDisabled: false,
                    countcolor: 'countred'
                }
            } else
                return {
                    ...state,
                    count: action.count,
                    disabled: false,
                    resetDisabled: true,
                    countcolor: 'count'
                }
        }
        case 'DO-RESET': {
            return {
                ...state,
                count: state.inputStartValue,
                countcolor: "count",
                disabled: false,
                resetDisabled: true
            }
        }
        case 'INPUT-START-VALUE-CHANGE': {
            // ...state,
            // count: 'Enter value and press SET',
            // countcolor: 'countEnter',
            // inputStartValue: Number(action.inputStartValue),
            // disabled: true,
            // resetDisabled: true,
            // disabledSet: true,
            // {
            if (Number(action.inputStartValue) >= Number(state.inputMaxValue) || Number(action.inputStartValue) < 0) {
                return {
                    ...state,
                    count: 'Incorrect value!',
                    countcolor: 'countIncorrect',
                    disabledSet: true,
                    startNumberColor: 'fromNumber-red',
                    maxNumberColor: 'toNumber-red',
                    inputStartValue: Number(action.inputStartValue)
                }
            } else {
                return {
                    ...state,
                    count: 'Enter value and press SET',
                    countcolor: 'countEnter',
                    inputStartValue: Number(action.inputStartValue),
                    disabled: true,
                    resetDisabled: true,
                    disabledSet: false,
                    startNumberColor: 'fromNumber',
                    maxNumberColor: 'toNumber'
                }
            }
        }
        case 'INPUT-MAX-VALUE-CHANGE': {
            if (Number(state.inputStartValue) >= Number(action.inputMaxValue) || Number(state.inputStartValue) < 0 || Number(action.inputMaxValue) < 0) {
                return {
                    ...state,
                    count: 'Incorrect value!',
                    countcolor: 'countIncorrect',
                    disabledSet: true,
                    startNumberColor: 'fromNumber-red',
                    maxNumberColor: 'toNumber-red',
                    inputMaxValue: Number(action.inputMaxValue)
                }
            } else {
                return {
                    ...state,
                    count: 'Enter value and press SET',
                    countcolor: 'countEnter',
                    inputMaxValue: Number(action.inputMaxValue),
                    disabled: true,
                    resetDisabled: true,
                    disabledSet: false,
                    startNumberColor: 'fromNumber',
                    maxNumberColor: 'toNumber'
                }
            }
        }
        case 'SET-CLICK': {
            return {
                ...state,
                count: action.count,
                countcolor: 'count',
                disabled: false,
                disabledSet: true
            }
        }
        default:
            return state
    }

}


export const changeCountAC = (count: number | string) =>
    ({type: 'CHANGE-COUNT', count}) as const
export const doResetAC = () => ({type: 'DO-RESET'} as const)
export const inputStartValueChangeAC = (inputStartValue: string,
) => ({type: 'INPUT-START-VALUE-CHANGE', inputStartValue}) as const
export const inputMaxValueChangeAC = (inputMaxValue: string,
) => ({type: 'INPUT-MAX-VALUE-CHANGE', inputMaxValue}) as const
export const setClickAC = (count: string | number,
) => ({type: 'SET-CLICK', count}) as const

type ActionsType =
    | ReturnType<typeof changeCountAC>
    | ReturnType<typeof doResetAC>
    | ReturnType<typeof inputStartValueChangeAC>
    | ReturnType<typeof inputMaxValueChangeAC>
    | ReturnType<typeof setClickAC>
