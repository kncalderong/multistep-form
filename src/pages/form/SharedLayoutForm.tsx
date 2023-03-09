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
      <Outlet />
    </div>
  )
}

export default SharedLayoutForm
