import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchUserById } from '../Slice/ProductSlice'
import { useState } from 'react'
import { memo } from 'react'
import './product.css'
const Product = () => {
    const [images, setImages] = useState([])
    const data = useSelector(state => state.product.data)
    const [currentImage, setCurrentImage] = useState()
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
                    <div className='products'>
                        <div className='left'>
                            <div className='lleft'>
                                {
                                    item.images.length != 0 &&
                                    item.images.map((item) => (
                                        <img onClick={()=>setCurrentImage(item)} src={item} height={100} width={100} />
                                    ))
                                }

                            </div>
                            <div className='lright'>
                                <img src={} />
                            </div>
                        </div>
                        <div className='right'>
                            <h3>{item.title}</h3>
                            <span>{item.brands}</span>
                            <p>{item.description}</p>
                            <button>{item.discountPercentage}%</button>
                            <div className='stock'>
                                <span>{item.price}</span>
                                <span>{item.stock}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default memo(Product)