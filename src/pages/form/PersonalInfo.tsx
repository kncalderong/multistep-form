import React from 'react'
import { useAppContext } from '../../context/appContext'
const PersonalInfo = () => {
  
  const { isLoading } = useAppContext()
  console.log(isLoading);
  
  return (
    <div>
      Personal Info
    </div>
  )
}

export default PersonalInfo
