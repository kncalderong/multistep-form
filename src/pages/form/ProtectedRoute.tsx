import React from 'react'
import { useAppContext } from '../../context/appContext'
import { Navigate, useLocation } from 'react-router-dom'

//To always have the user basic info (name, email, phone)

const ProtectedRoute = ({ children }: { children: JSX.Element}): JSX.Element => {
  const currentURL = useLocation()
  const { name, email, phone, isFinished } = useAppContext()
  
  if (isFinished && currentURL.pathname !== "/confirmation") {
    return <Navigate to='/confirmation' />
  }
  
  if ( !isFinished && (!name || !email || !phone)) {
    return <Navigate to='/' />
  }
  
  return (
    children
  )
}

export default ProtectedRoute
