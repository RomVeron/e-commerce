import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"

const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
    "https://static.app.biggie.com.py/images/banners/Rpu23AmL4sCVh68ngGDt33lqL8sEB4QPZQkBUVEY.jpg",
    "https://static.app.biggie.com.py/images/banners/W7qd7rF9r921BxMTvX6rbnBOTRZVJyGFWwY2WJjc.jpg",
    "https://static.app.biggie.com.py/images/banners/kL1d0r4M4YCzck8LEMM906uQ2sfMQInKjrXJaCrr.jpg"
  ];

  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0?2:(prev)=>prev-1)
  };

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2?0:(prev)=>prev+1)
  };

  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
            <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[300vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt='ImgOne' loading='priority' />
                <img className='w-screen h-full object-cover' src={data[1]} alt='ImgTwo' loading='priority' />
                <img className='w-screen h-full object-cover' src={data[2]} alt='ImgThree' loading='priority' />
            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowLeft />                    
                </div>
                <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                    <HiArrowRight />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner