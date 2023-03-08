import React from 'react'
import { NavLink } from 'react-router-dom'

const FormNavbar = () => {
  const isFinhedthis = false
  return (
    <div className='flex gap-4'>
      <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold  `} to='/'>1</NavLink>
      <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold  ${isFinhedthis ? 'pointer-events-auto' : 'pointer-events-none' }  `}  to='/select-plan'>2</NavLink>
      <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold  `}  to='/adds-on'>3</NavLink>
      <NavLink className={({isActive})=>`w-[33px] h-[33px] rounded-full ${isActive ? 'bg-light-blue text-marine-blue ' : 'text-white border-[1px]'} flex justify-center items-center text-sm font-bold  `}   to='/summary'>4</NavLink>
    </div>
  )
}

export default FormNavbar
