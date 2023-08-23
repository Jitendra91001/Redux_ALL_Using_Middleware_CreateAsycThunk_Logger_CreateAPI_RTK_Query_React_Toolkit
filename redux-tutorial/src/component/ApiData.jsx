import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { getUser } from '../Redux/Raducer/accountReducer'



const ApiData = () => {
  let [color, setColor] = useState("#ffffff");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const data = useSelector((state) => state.amount.data)
  const pending = useSelector((state) => state.amount.pending)
  const error = useSelector(state => state.amount.error)
  const dispatch = useDispatch()
  return (
    <div className='apiData'>
      {
        pending ? 
        <ClipLoader
          color={color}
          loading={pending}
          cssOverride={override}
          size={50}
          aria-label="CircleLoader"
          data-testid="loader"
        /> : error ? <p style={{color:"red",textAlign:"center"}}>{error}</p> : <div className='showData'>
          {
            data &&
            data.map((item) => (
              <div className='Item'>
                <h3>{item.name}</h3>
                <span>{item.username}</span>
                <p>{item.email}</p>
                <span>{item.phone}</span>
                <span>{item.website}</span>
                <div className='address'>
                  <h3>Address</h3>
                  <span>City: {item.address.city}</span>
                  <span>street: {item.address.street}</span>
                  <span>suite: {item.address.suite}</span>
                  <span>zipcode: {item.address.zipcode}</span>
                </div>


              </div>
            ))
          }
        </div>
      }

      <button onClick={() => dispatch(getUser)}>ApiData</button>
    </div >
  )
}

export default memo(ApiData)