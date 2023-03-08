import React from 'react'
import FormNavbar from '../../components/FormNavbar'
import BgMobile from '../../assets/images/bg-sidebar-mobile.svg'
import {Outlet, NavLink} from 'react-router-dom'

const SharedLayoutForm = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-center items-start h-[172px] pt-8' style={{backgroundImage: `url(${BgMobile})`}} >
        <FormNavbar/>
      </div>
      <div className='flex flex-col grow' >
        <div className='flex justify-center items-start p-4 grow bg-magnolia'>
          <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] ' >
            <Outlet />
          </div>
        </div>
        <div className='flex justify-between p-4 items-center'>
          <NavLink  to='' className='text-sm text-cool-gray' >Go Back</NavLink>
          <NavLink  to='' className='w-[97px] h-[40px] bg-marine-blue text-white text-sm flex justify-center items-center rounded-[4px]' >Next Step</NavLink>
        </div>
      </div>
     
    </div>
  )
}

export default SharedLayoutForm
