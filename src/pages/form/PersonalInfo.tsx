import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import handleChange from '../../utils/handleChange'
import FormInputRow from '../../components/FormInputRow'



const PersonalInfo = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const { } = useAppContext()

  return (
    <form className='flex flex-col'>
      <h2 className='text-2xl text-marine-blue font-bold mb-2' >Personal info</h2>
      <p className='text-cool-gray mb-[22px]' >Please provide your name, email address, and phone number.</p>
      <div className='flex flex-col  gap-4 '>
        <FormInputRow type='text' value={name} setValue={setName} label='Name' placeHolder='e.g. Stephen King' name='name' />
        <FormInputRow type='email' value={email} setValue={setEmail} label='Email Address' placeHolder='e.g. stephenking@lorem.com' name='email' />
        <FormInputRow type='number' value={phone} setValue={setPhone} label='Phone Number' placeHolder='e.g. +1 234 567 890' name='phone' />
      </div>
    </form>
  )
}

export default PersonalInfo
