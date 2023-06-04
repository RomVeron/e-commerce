import React from 'react'
import { cartImg, logoBiggie } from '../assets/index'

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
            <div>
                <img className='w-28' src={logoBiggie} alt='logoBiggie' />
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>                
                </ul>
                <div className='relative'>
                    <img className='w-7' src={ cartImg } alt=''/>
                    <span className='absolute w-7 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont'>0</span>
                </div>
                <img className='w-8 h-8 rounded-full' src='https://images.pexels.com/photos/16359868/pexels-photo-16359868/free-photo-of-scenic-photo-of-two-men-in-a-cave.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt='userLogo'/>
            </div>
        </div>        
    </div>
  )
}

export default Header