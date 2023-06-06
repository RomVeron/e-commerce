import React from 'react'

const ProductsCard = ({product}) => {
  
  return (
    <div className='group'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt='productImg'/>
      </div>
    </div>
  )
}

export default ProductsCard