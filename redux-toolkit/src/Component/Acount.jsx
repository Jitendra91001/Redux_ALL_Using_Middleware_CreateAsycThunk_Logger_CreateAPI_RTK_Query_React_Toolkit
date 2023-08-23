import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementbyamount } from '../Redux/Actions/action';



const Acount = () => {
    const amount = useSelector((state) => state.amount.amount)
    const bonus = useSelector((state) => state.bonus.points)
    const [input,setInput]=useState(0)
    const dispatch=useDispatch()
    return (
        <div className='account'>
            <h1>Account</h1>
            <div className='content'>
                <span>Bonus : {bonus}</span>
                <span>Account :{amount} </span>
            </div>
            <div className='row'>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
                <input type='text' placeholder='Enter the number' onChange={(e)=>setInput(parseInt(e.target.value))} />
                <button onClick={()=>dispatch(incrementbyamount(input))}>IncrementByUser</button>
            </div>
        </div>
    )
}

export default Acount