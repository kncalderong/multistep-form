import React from 'react'
import FormNavbar from '../../components/FormNavbar'
import BgMobile from '../../assets/images/bg-sidebar-mobile.svg'
import BgDesktop from '../../assets/images/bg-sidebar-desktop.svg'
import {Outlet, NavLink} from 'react-router-dom'

const SharedLayoutForm = () => {
  return (
    <div className='h-screen flex justify-center items-center md:bg-magnolia'>
      <div className='flex flex-col h-full md:h-[600px] md:w-[90%] md:max-w-[900px] md:flex-row md:p-4 md:rounded-[15px] md:bg-white'>      
        <div className=' justify-center items-start h-[172px] min-h-[172px] pt-8 flex md:hidden' style={{backgroundImage: `url(${BgMobile})`}} >
          <FormNavbar/>
        </div>
        <div className='justify-center items-start h-full w-[274px] pt-8 hidden md:flex md:pt-10 md:justify-start md:px-8' style={{backgroundImage: `url(${BgDesktop})`}} >
          <FormNavbar/>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayoutForm
