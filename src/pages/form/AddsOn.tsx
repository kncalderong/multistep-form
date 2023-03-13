import { useState, useEffect } from 'react'
import FormMultipleOptions from '../../components/FormMultipleOptions'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import { addsOptions } from '../../types/Form'

const AddsOn = () => {

  const { isMonthlyPlan, selectedAddsOn, updateInfo } = useAppContext()
  const [selectedOptions, setSelectedOptions] = useState<addsOptions[]>(selectedAddsOn)
  const navigate = useNavigate()
  
  const updateLocalState = (value: addsOptions) => {
    setSelectedOptions((prevValue) => {
      if (selectedOptions.includes(value)) {
        return prevValue.filter((filterValue) => filterValue !== value)
      }
      return [...prevValue, value]
    })
  }

  const runValidations = (url: string) => {
    updateInfo('selectedAddsOn', selectedOptions)
    navigate(url)
  }
  

  return (
    <div className='flex flex-col grow md:items-center' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia md:pt-[56px] md:bg-white'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] md:mt-0 md:p-0 md:w-[450px]' >
          <form className='flex flex-col'>
            <h2 className='text-2xl text-marine-blue font-bold mb-2  md:text-[32px] md:font-bold md:mb-3' >Pick adds-ons</h2>
            <p className='text-cool-gray mb-[22px] md:mb-[35px]' >Add-ons help enhance your gaming experience</p>
            <div className='flex flex-col gap-3 mb-6' >
              <FormMultipleOptions description='Access to multiplayer games' name='Online service' isIncluded={isMonthlyPlan ? selectedOptions.includes(addsOptions.onlineServiceMonthly) : selectedOptions.includes(addsOptions.onlineServiceYearly)} price={isMonthlyPlan ? '+$1/mo' : '+$10/yr'} setFunction={updateLocalState} value={isMonthlyPlan ? addsOptions.onlineServiceMonthly : addsOptions.onlineServiceYearly} />
              <FormMultipleOptions description='Extra 1TB of cloud save' name='Larger storage' isIncluded={isMonthlyPlan ? selectedOptions.includes(addsOptions.largerStorageMonthly) : selectedOptions.includes(addsOptions.largerStorageYearly)} price={isMonthlyPlan ? '+$2/mo' : '+$20/yr'} setFunction={updateLocalState} value={isMonthlyPlan ? addsOptions.largerStorageMonthly : addsOptions.largerStorageYearly } />
              <FormMultipleOptions description='Custom theme in your profile' name='Customizable profile' isIncluded={isMonthlyPlan ? selectedOptions.includes(addsOptions.customizableProfileMonthly) : selectedOptions.includes(addsOptions.customizableProfileYearly)} price={isMonthlyPlan ? '+$2/mo' : '+$20/yr'} setFunction={updateLocalState} value={isMonthlyPlan ? addsOptions.customizableProfileMonthly : addsOptions.customizableProfileYearly}/>
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-between p-4 items-center md:w-[450px] md:px-0'>
        <div className='text-sm text-cool-gray cursor-pointer md:w-[123px] md:h-[48px] md:text-base md:rounded-lg md:hover:text-marine-blue md:hover:font-bold' onClick={() => runValidations('/select-plan')} >Go Back</div>
        <div className='w-[97px] h-[40px] bg-marine-blue text-white text-sm flex justify-center items-center rounded-[4px] cursor-pointer md:w-[123px] md:h-[48px] md:text-base md:rounded-lg' onClick={() => runValidations('/summary')} >Next Step</div>
      </div>
    </div>
  )
}

export default AddsOn
