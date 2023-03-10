import React, { useState } from 'react'
import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'
import FormUniqueOption from '../../components/FormUniqueOption'


export enum planOptions {
  arcadeMonth = 'arcade-month',
  advancedMonth = 'advanced-month',
  proMonth= 'pro-month'
}

const SelectPlan = () => {
  
  const [selectedPlan, setSelectedPlan] = useState<planOptions | null>(null)

  
  return (
    <div className='flex flex-col grow' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] ' >
          <form className='flex flex-col'>
          <h2 className='text-2xl text-marine-blue font-bold mb-2' >Select your plan</h2>
            <p className='text-cool-gray mb-[22px]' >You have the option of monthly or yearly billing</p>
            <div  className='flex flex-col gap-3' >
              <FormUniqueOption isSelected={selectedPlan === planOptions.arcadeMonth} name='Arcade' price='$9/mo' icon={iconArcade} setFunction={setSelectedPlan} value={planOptions.arcadeMonth } />
              <FormUniqueOption isSelected={selectedPlan === planOptions.advancedMonth} name='Advanced' price='$12/mo' icon={iconAdvanced} setFunction={setSelectedPlan} value={planOptions.advancedMonth} />
              <FormUniqueOption isSelected={selectedPlan === planOptions.proMonth} name='Pro' price='$15/mo' icon={iconPro} setFunction={setSelectedPlan} value={planOptions.proMonth } />
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-between p-4 items-center'>
        <div className='text-sm text-cool-gray cursor-pointer' >Go Back</div>
        <div className='w-[97px] h-[40px] bg-marine-blue text-white text-sm flex justify-center items-center rounded-[4px] cursor-pointer' >Next Step</div>
      </div>
    </div>
  )
}

export default SelectPlan
