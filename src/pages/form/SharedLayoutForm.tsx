import React from 'react'
import FormNavbar from '../../components/FormNavbar'
import {Outlet} from 'react-router-dom'

const SharedLayoutForm = () => {
  return (
    <div>
      <FormNavbar/>
      SharedLayout Image
      <Outlet />
    </div>
  )
}

export default SharedLayoutForm
