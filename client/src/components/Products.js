import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {

  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque possimus quidem quo iusto vitae voluptatibus earum, id voluptatem iure harum, dicta laudantium veritatis ipsa! Quos repellat ad ab obcaecati consectetur.</p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-col-4 gap-10'>
            {
              products.map((item)=> (
                <ProductsCard />
              ))  
            }
        </div>
    </div>
  )
}

export default Products