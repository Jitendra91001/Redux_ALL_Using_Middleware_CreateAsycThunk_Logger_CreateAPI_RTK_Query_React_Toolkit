import React,{useState} from 'react'

const Cart = ({item}) => {
    const [images, setImages] = useState(item.images)
    const [currentImage, setCurrentImage] = useState(item.thumbnail)
  return (
    <div className='products'>
    <div className='left'>
        <div className='lleft'>
            {
                images.length != 0 &&
                images.map((item) => (
                    <img onClick={()=>setCurrentImage(item)} src={item} height={100} width={100} />
                ))
            }

        </div>
        <div className='lright'>
            <img src={currentImage} />
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
  )
}

export default Cart