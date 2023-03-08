import React from 'react'
import handleChange from '../utils/handleChange'


type FormInputRowProps = {
  setValue: React.SetStateAction<any>
  value: string
  name: string
  label: string
  placeHolder: string
  type: string
}

const FormInputRow = ({setValue,value, name, label, placeHolder, type}: FormInputRowProps) => {
  return (
    <div className='flex flex-col items-start' >
          <label className='text-xs text-marine-blue ' htmlFor={name}>{label}</label>
          <input type={type} value={value} name={name} onChange={(e) => {
            handleChange(e, setValue)
          }} placeholder={placeHolder} className='border-light-gray rounded-[4px] px-4 py-2 border-[1px] mt-1 w-full focus:border-purplish-blue focus-visible:outline-none text-marine-blue text-[15px] placeholder-cool-gray placeholder:font-medium ' />
    </div>
  )
}

export default FormInputRow
