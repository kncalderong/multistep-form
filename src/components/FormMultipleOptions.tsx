import React from 'react'
import checkIcon from '../../src/assets/images/icon-checkmark.svg'
import { addsOptions } from '../types/Form'

type FormMultipleOptionsProps = {
  isIncluded: boolean
  name: string
  description: string
  price: string
  value: addsOptions
  setFunction: (value: addsOptions) => void
}


const FormMultipleOptions = ({ isIncluded, name, description, price, value, setFunction }: FormMultipleOptionsProps) => {
  return (
    <div className={`flex px-4 pt-[14px] pb-[18px] justify-start items-center ${isIncluded ? 'border-purplish-blue bg-very-light-gray' : 'border-light-gray bg-white'} rounded-lg border-[1px] gap-[16px] cursor-pointer`} onClick={() => setFunction(value)}>
      <div className={`flex justify-center items-center w-[20px] h-[20px] rounded-[4px] p-[3px] ${isIncluded ? 'bg-purplish-blue' : 'bg-white border-light-gray  border-[1px]'} `}>
        <img src={checkIcon} alt="iconArcade" className='w-full' />
      </div>
      <div className='flex justify-between grow'>
        <div className='flex flex-col gap-[3px]' >
          <p className='text-marine-blue font-medium text-sm' >{name}</p>
          <p className='text-cool-gray text-xs' >{description}</p>
        </div>
        <p className='text-purplish-blue text-xs flex justify-center items-center' >{price}</p>
      </div>
    </div>
  )
}

export default FormMultipleOptions
