import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import allPrices from '../../utils/allPrices'
import capitalize from '../../utils/capitalize'
import { addsOptions, planOptions } from '../../types/Form'


type AddOns = {
  addOn: addsOptions,
  price: number
}
interface FinalForm {
  name: string,
  phone: string,
  email: string,
  typeOfCharge: 'Monthly' | 'Yearly',
  selectedPlan: planOptions,
  planCost: number,
  addOns: AddOns[],
  total: number
}

const Summary = () => {
  const navigate = useNavigate()
  const { name, phone, email, isMonthlyPlan, selectedAddsOn, selectedPlan, updateInfo, resetState } = useAppContext()
  const [finalForm, setFinalForm] = useState<FinalForm | null>(null)

  useEffect(() => {
    const addOns = selectedAddsOn.map((item: addsOptions) => {
      return {
        addOn: item,
        price: allPrices[item]
      }
    })
    const total = selectedAddsOn.reduce((accumulator, current) => {
      return accumulator + allPrices[current]
    }, 0) + allPrices[selectedPlan] 
    
    const objToSubimt: FinalForm = {
      name,
      phone: `${phone}`,
      email,
      typeOfCharge: isMonthlyPlan ? 'Monthly' : 'Yearly',
      selectedPlan,
      planCost: allPrices[selectedPlan],
      addOns,
      total
    }
    setFinalForm(objToSubimt)
  }, [])

  const runValidations = (url: string) => {
    
    //here the form would be submitted, the context state reset, and navigate to a final thanks message
    resetState()
    updateInfo('isFinished', true)
    navigate(url)
  }

  if (finalForm === null) return <div></div>

  return (
    <div className='flex flex-col grow md:items-center' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia md:pt-[56px] md:bg-white'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] md:mt-0 md:p-0 md:w-[450px]' >
          <div className='flex flex-col'>
            <h2 className='text-2xl text-marine-blue font-bold mb-2  md:text-[32px] md:font-bold md:mb-3' >Finishing up</h2>
            <p className='text-cool-gray mb-[22px] md:mb-[35px]' >Double-check everything looks OK before confirming.</p>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col p-4 bg-very-light-gray gap-3 rounded-lg md:gap-4' >
                <div className={`flex justify-between items-center  ${finalForm.addOns.length > 0 && 'border-b-[1px] border-b-light-gray pb-3 md:pb-6'}`} >
                  <div className='flex flex-col gap-[3px]'>
                    <p className='text-marine-blue font-medium text-sm md:text-base'>{`${capitalize(finalForm.selectedPlan.split('-')[0])} (${finalForm.typeOfCharge})`} </p>
                    <p className='text-sm text-cool-gray underline cursor-pointer' onClick={() => navigate('/select-plan')} >Change</p>
                  </div>
                  <p className='font-bold text-marine-blue text-sm md:text-base'> {`$${finalForm.planCost}/${isMonthlyPlan ? 'mo' : 'yr'}`}</p>
                </div>
                {finalForm.addOns.map((item: AddOns, idx: number) => {
                  return (
                    <div className='flex justify-between items-center' key={idx} >
                      <p className='text-cool-gray text-sm'>{`${capitalize(item.addOn.split('-')[0])} ${item.addOn.split('-')[1]}`}</p>
                      <p className='text-marine-blue text-sm'>{`+$${item.price}/${isMonthlyPlan ? 'mo' : 'yr'}`}</p>
                    </div>)
                })
                }
              </div>
              <div className='flex justify-between items-center p-4 pb-0'>
                <p className='text-cool-gray text-sm' >{`Total (per ${isMonthlyPlan ? 'month' : 'year'})` } </p>
                <p className='text-purplish-blue font-bold md:text-xl'> {`$${finalForm.total}/${isMonthlyPlan ? 'mo' : 'yr'}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between p-4 items-center md:w-[450px] md:px-0'>
        <div className='text-sm text-cool-gray cursor-pointer md:w-[123px] md:h-[48px] md:text-base md:rounded-lg md:hover:text-marine-blue md:hover:font-bold' onClick={() => navigate('/adds-on')} >Go Back</div>
        <div className='w-[97px] h-[40px] bg-purplish-blue text-white text-sm flex justify-center items-center rounded-[4px] cursor-pointer  md:w-[123px] md:h-[48px] md:text-base md:rounded-lg' onClick={() => runValidations('/confirmation')} >Confirm</div>
      </div>
    </div>
  )
}

export default Summary
