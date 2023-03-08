import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import handleChange from '../../utils/handleChange'


const PersonalInfo = () => {
  const [name, setName] = useState<string>('')
  
  
  return (
    <form>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} name='name' onChange={(e) => {
          handleChange(e, setName)
        }} />
      </div>
    </form>
  )
}

export default PersonalInfo
