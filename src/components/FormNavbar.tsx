import React from 'react'
import { NavLink } from 'react-router-dom'

const FormNavbar = () => {

  return (
    <div className='flex gap-4 md:flex-col md:gap-8'>
      <div className='flex gap-4 items-center'>
        <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold pointer-events-none `} to='/'>1</NavLink>
        <div className='hidden md:flex md:flex-col' >
          <p className='text-light-gray text-xs uppercase'>step 1</p>
          <p className='font-bold text-sm uppercase text-white tracking-wider'>your info</p>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold pointer-events-none`}  to='/select-plan'>2</NavLink>
        <div className='hidden md:flex md:flex-col' >
          <p className='text-light-gray text-xs uppercase'>step 2</p>
          <p className='font-bold text-sm uppercase text-white tracking-wider'>select plan</p>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold pointer-events-none `}  to='/adds-on'>3</NavLink>
        <div className='hidden md:flex md:flex-col' >
          <p className='text-light-gray text-xs uppercase'>step 3</p>
          <p className='font-bold text-sm uppercase text-white tracking-wider'>add-ons</p>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold pointer-events-none `}   to='/summary'>4</NavLink>
        <div className='hidden md:flex md:flex-col' >
          <p className='text-light-gray text-xs uppercase'>step 4</p>
          <p className='font-bold text-sm uppercase text-white tracking-wider'>summary</p>
        </div>
      </div>
    </div>
  )
}

export default FormNavbar
