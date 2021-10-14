import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter as reset } from '../actions/couter';


export const CounterComponent = () => {
    const data = useSelector(store => store);
    console.log(data);
    const {counter} = data;
    const dispatch = useDispatch();
    const handlerIncrementCounter = () => {
        dispatch(incrementCounter(1));
    }
    const handlerDecrementCounter = () => {
        dispatch(decrementCounter(1));
    }
    const resetCounter = () => {
        dispatch(reset(0));
    }
    return (
        <div>
            { counter }
            <button onClick={handlerIncrementCounter}>
                +1
            </button>
            <button onClick={handlerDecrementCounter}>
                -1
            </button>
            <button onClick={resetCounter}>
                reset
            </button>
        </div>
    )
}
