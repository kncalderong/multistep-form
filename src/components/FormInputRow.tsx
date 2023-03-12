import React from 'react'
import handleChange from '../utils/handleChange'


type FormInputRowProps = {
  setValue: React.SetStateAction<any>
  value: string
  name: string
  label: string
  placeHolder: string
  type: string
  showAlert?: boolean
  alertMessage?: string
  refHook: React.RefObject<HTMLInputElement>
}

const FormInputRow = ({ setValue, value, name, label, placeHolder, type, showAlert, alertMessage,refHook }: FormInputRowProps) => {
  return (
    <div className='flex flex-col items-start relative' >
      <label className='text-xs text-marine-blue md:text-sm' htmlFor={name}>{label}</label>
      <input type={type} value={value} name={name} onChange={(e) => {
          handleChange(e, setValue)
      }}
        ref={refHook}
        placeholder={placeHolder} className={`border-light-gray rounded-[4px] px-4 py-2 border-[1px] mt-1 w-full ${showAlert ? 'focus:border-strawberry-red' : 'focus:border-purplish-blue'} focus-visible:outline-none text-marine-blue text-[15px] placeholder-cool-gray placeholder:font-medium md:text-base md:py-3 cursor-pointe md:rounded-lg`} />
      {showAlert && (
        <div className='absolute right-0 text-xs text-strawberry-red font-bold' >
          {alertMessage}
        </div>
      )}
    </div>
  )
}

export default FormInputRow
