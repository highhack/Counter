import React, {ChangeEvent} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Set} from "./Set";
import  {AllAppStateType} from "./state/store";
import {
    changeCountAC,
    doResetAC,
    inputMaxValueChangeAC,
    inputStartValueChangeAC,
    setClickAC
} from "./state/count-reducer";
import {useDispatch, useSelector} from "react-redux";

type CounterType = {
    count: number | string
    disabled: boolean
    countcolor: string
    resetDisabled: boolean
    inputStartValue: string
    inputMaxValue: string
    disabledSet: boolean
    maxNumberColor: string
    startNumberColor: string
}




function App() {


    const counter = useSelector<AllAppStateType, CounterType>(state => state.counterPage)
    // const seter = useSelector<AllAppStateType, SetType>(state => state.counterPage)

    const dispatch = useDispatch();
    let count = counter.count
    let disabled = counter.disabled
    let resetDisabled = counter.resetDisabled
    let countcolor = counter.countcolor

    let inputStartValue = counter.inputStartValue
    let inputMaxValue = counter.inputMaxValue
    let disabledSet = counter.disabledSet
    let maxNumberColor = counter.maxNumberColor
    let startNumberColor = counter.startNumberColor


    const inputStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputStartValue = e.currentTarget.value

        dispatch(inputStartValueChangeAC(inputStartValue))

    }
    const inputMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        inputMaxValue = e.currentTarget.value
        dispatch(inputMaxValueChangeAC(inputMaxValue))
    }
    const setClick = () => {
        count = Number(inputStartValue)
        dispatch(setClickAC(count))
    }
    const changeCount = (count: number | string) => {
        count = Number(count) + 1
        dispatch(changeCountAC(count))
    }
    const doReset = () => {
        dispatch(doResetAC())
    }

    // useEffect(() => {
    //     let getCountFromLocalStorge = localStorage.getItem('count')
    //     let getDisabledFromLocalStorge = localStorage.getItem('disabled')
    //     let getResetDisabledFromLocalStorge = localStorage.getItem('resetDisabled')
    //     let getValueFromLocalStorge = localStorage.getItem('count')
    //     if (getValueFromLocalStorge) {
    //         let newCount = JSON.parse(getCountFromLocalStorge)
    //         setCount(newCount)
    //         let newDisabled = JSON.parse(getDisabledFromLocalStorge)
    //         setCount(newCount)
    //         let newResetDisabled = JSON.parse(getesetDisabledFromLocalStorge)
    //         setCount(newCount)
    //         let newCount = JSON.parse(getValueFromLocalStorge)
    //         setCount(newCount)
    //     }
    // },[])
    // useEffect(() => {localStorage.setItem('count',JSON.stringify(count))}, [count])

    // useEffect(() => {
    //     localStorage.setItem('count',JSON.stringify(count))
    //     localStorage.setItem('disabled',JSON.stringify(disabled))
    //     localStorage.setItem('resetDisabled',JSON.stringify(resetDisabled))
    //     localStorage.setItem('countcolor',countcolor)
    //     }, [count,disabled,resetDisabled,countcolor]
    // )

    return (
        <div className="App">
            <Set
                startNumberColor={startNumberColor}
                maxNumberColor={maxNumberColor}
                inputMaxValue={inputMaxValue}
                inputMaxValueChange={inputMaxValueChange}
                inputStartValue={inputStartValue}
                inputStartValueChange={inputStartValueChange}
                disabledSet={disabledSet}
                setClick={setClick}
            />
            <Counter count={count}
                     changeCount={changeCount}
                     doReset={doReset}
                     resetDisabled={resetDisabled}
                     disabled={disabled}
                     countcolor={countcolor}/>

        </div>
    );
}

export default App;
