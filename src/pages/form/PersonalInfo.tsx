import { useState, useRef } from 'react'
import { useAppContext } from '../../context/appContext'
import FormInputRow from '../../components/FormInputRow'
import validateEmail from '../../utils/validateEmail'
import { useNavigate } from 'react-router-dom'



export type FormInput = {
  value: string
  showAlert: boolean
  alertMessage: string
}

const PersonalInfo = () => {
  const { name: nameContext, email: emailContext, phone: phoneContext, updateInfo } = useAppContext()
  const navigate = useNavigate()
  
  const [name, setName] = useState<FormInput>({value: nameContext, alertMessage:'This field is required',showAlert: false})
  const [email, setEmail] = useState<FormInput>({value: emailContext, alertMessage:'This field is required',showAlert: false})
  const [phone, setPhone] = useState<FormInput>({value: phoneContext, alertMessage:'This field is required',showAlert: false})
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputEmailRef = useRef<HTMLInputElement>(null)
  const inputPhoneRef = useRef<HTMLInputElement>(null)

  const runValidations = () => {
    //validation for name field
    if (name.value.length < 1) {
      setName((prevState: FormInput) => {
        return {
          ...prevState,
          showAlert: true
        }
      })
      inputNameRef.current?.focus()
      return
    }
    
    //validations for email field
    if (email.value.length < 1) {
      setEmail((prevState: FormInput) => {
        return {
          ...prevState,
          showAlert: true,
        }
      })
      inputEmailRef.current?.focus()
      return
    }
    const validationResult = validateEmail(email.value)
    if (!validationResult) {
      setEmail((prevState: FormInput) => {
        return {
          ...prevState,
          showAlert: true,
          alertMessage: 'Please provide a valid email'
        }
      })
      inputEmailRef.current?.focus()
      return
    }
    if (validationResult) {
      setEmail((prevState: FormInput) => {
        return {
          ...prevState,
          value: validationResult  //to set a clean value for email: inLowerCase and without spaces
        }
      })
    }
    
    //validations for Phone number
    if (phone.value.length < 1) {
      setPhone((prevState: FormInput) => {
        return {
          ...prevState,
          showAlert: true
        }
      })
      inputPhoneRef.current?.focus()
      return
    }
    
    //to update info in context global state
    updateInfo('name', name.value)
    updateInfo('email', email.value)
    updateInfo('phone', phone.value)
    
    navigate('/select-plan')
  }
  
  return (

    <div className='flex flex-col grow' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia md:pt-[56px] md:bg-white'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] md:mt-0 md:p-0 md:w-[450px] ' >
          <form className='flex flex-col'>
            <h2 className='text-2xl text-marine-blue font-bold mb-2 md:text-[32px]' >Personal info</h2>
            <p className='text-cool-gray mb-[22px]' >Please provide your name, email address, and phone number.</p>
            <div className='flex flex-col  gap-4 '>
              <FormInputRow type='text' value={name.value} setValue={setName} label='Name' placeHolder='e.g. Stephen King' name='name' refHook={inputNameRef} showAlert={name.showAlert} alertMessage={name.alertMessage} />
              <FormInputRow type='email' value={email.value} setValue={setEmail} label='Email Address' placeHolder='e.g. stephenking@lorem.com' name='email' refHook={inputEmailRef} showAlert={email.showAlert} alertMessage={email.alertMessage} />
              <FormInputRow type='number' value={phone.value} setValue={setPhone} label='Phone Number' placeHolder='e.g. +1 234 567 890' name='phone' refHook={inputPhoneRef} showAlert={phone.showAlert} alertMessage={phone.alertMessage} />
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-end p-4 items-center'>
        <div className='w-[97px] h-[40px] md:w-[123px] md:h-[48px] md:text-base md:rounded-lg bg-marine-blue text-white text-sm flex justify-center items-center rounded-[4px] cursor-pointer' onClick={()=>runValidations() } >Next Step</div>
      </div>
    </div>
  )
}

export default PersonalInfo
