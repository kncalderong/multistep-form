import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
const PersonalInfo = () => {
  
  const { isFinished, updateForm } = useAppContext()
  
  useEffect(() => {
    console.log(isFinished);
  },[isFinished])
  return (
    <div>
      Personal Info
      <button onClick={()=>updateForm()}>UpdateForm</button>
    </div>
  )
}

export default PersonalInfo
