import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncBonus } from '../Redux/Actions/action'

const Bonus = () => {
    const amount = useSelector((state) => state.amount.amount)
    const bonus = useSelector((state) => state.bonus.points)
    const dispatch=useDispatch()
  return (
    <div className='bonus'>
        <h1>Bonus</h1>
           <div className='button'>
           <span>Account : {amount}</span>
            <span>Bonus : {bonus} </span>
            
           </div>
        <button onClick={()=>dispatch(IncBonus())}>Increment</button>
    </div>
  )
}

export default Bonus