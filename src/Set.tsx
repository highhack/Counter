import React, {ChangeEvent} from "react";
import './App.css';

type SetPropsType = {
    inputStartValue: string
    inputMaxValue: string
    inputStartValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputMaxValueChange: (e: ChangeEvent<HTMLInputElement>) => void
    setClick: () => void
    disabledSet: boolean
    maxNumberColor: string
    startNumberColor: string
}



export function Set(props: SetPropsType) {


    return <div className = 'bigBorderSet'>
        <div className={'values'}>
        <div  className={'maxValue'}>
            max value
            <input type="number"
                   className={props.maxNumberColor}
                   value={props.inputMaxValue}
                   onChange={props.inputMaxValueChange} />
        </div>
            <div className={'startValue'}>
                start value
                <input type="number"
                       className={props.startNumberColor}
                       value={props.inputStartValue}
                       onChange={props.inputStartValueChange}/>
            </div>
            </div>
        <div className='buttons'>
              <button className='butonset' disabled = {props.disabledSet} onClick={() => props.setClick()}>set</button>
        </div>
    </div>
}
