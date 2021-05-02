import React from "react";
import './App.css';

export type CountPropsType = {
    count: number | string
    changeCount: (count: number | string) => void
    doReset: () => void
    disabled: boolean
    countcolor: string
    resetDisabled: boolean
}




export function Counter(props: CountPropsType) {


 return <div className = 'bigBorder'>
    <div className={props.countcolor} >{props.count}</div>
    <span className='buttons'>
              <button className='inc' disabled={props.disabled} onClick={() => {props.changeCount(props.count)}} >inc</button>

              <button className='reset' disabled= {props.resetDisabled} onClick={() => {props.doReset()}}>reset</button>
          </span>
 </div>
                  }

