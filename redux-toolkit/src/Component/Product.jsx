import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUserById } from '../Slice/ProductSlice'
import { useState } from 'react'
import { memo } from 'react'
import './product.css'
import Cart from './Cart'
const Product = () => {
    const data = useSelector(state => state.product.data)
    const dispatch = useDispatch()
    console.log(data)
    useEffect(() => {
        dispatch(fetchUserById())
    }, [])
    return (
        <>
            {
                data.length != 0 &&
                data.map((item) => (
                     <Cart item={item}/>
                ))
            }
        </>
    )
}

export default memo(Product)