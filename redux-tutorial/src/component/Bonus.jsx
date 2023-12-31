import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DescBonus, IncBonus, descBonus } from '../Redux/Actions/action'

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
        <div className='bonusButton'>
        <button onClick={()=>dispatch(IncBonus())}>Increment</button>
        <button onClick={()=>{dispatch(DescBonus())}}>Decrement</button>
        </div>
    </div>
  )
}

export default Bonus