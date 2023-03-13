import React, { useEffect, useState, useRef } from 'react'
import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'
import FormUniqueOption from '../../components/FormUniqueOption'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import { planOptions } from '../../types/Form'




const SelectPlan = () => {

  const { selectedPlan, isMonthlyPlan, updateInfo } = useAppContext()
  const [selectedPlanLocal, setSelectedPlanLocal] = useState<planOptions>(selectedPlan)
  const [isMonthly, setIsMonthly] = useState<boolean>(isMonthlyPlan)

  const navigate = useNavigate()

  //to adjust the plan selected to yearly or monthly toggle changed
  useEffect(() => {
    if (!isMonthly) {
      if (selectedPlanLocal === planOptions.arcadeMonth) {
        setSelectedPlanLocal(planOptions.arcadeYear)
        return
      }
      if (selectedPlanLocal === planOptions.advancedMonth) {
        setSelectedPlanLocal(planOptions.advancedYear)
        return
      }
      if (selectedPlanLocal === planOptions.proMonth) {
        setSelectedPlanLocal(planOptions.proYear)
        return
      }
    }
    if (isMonthly) {
      if (selectedPlanLocal === planOptions.arcadeYear) {
        setSelectedPlanLocal(planOptions.arcadeMonth)
        return
      }
      if (selectedPlanLocal === planOptions.advancedYear) {
        setSelectedPlanLocal(planOptions.advancedMonth)
        return
      }
      if (selectedPlanLocal === planOptions.proYear) {
        setSelectedPlanLocal(planOptions.proMonth)
        return
      }
    }
  }, [isMonthly])

  const runValidations = (url: string) => {
    updateInfo('isMonthlyPlan', isMonthly)
    updateInfo('selectedPlan', selectedPlanLocal)

    navigate(url)
  }

  return (
    <div className='flex flex-col grow' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia md:pt-[56px] md:bg-white'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] md:mt-0 md:p-0 md:w-[450px]' >
          <form className='flex flex-col'>
            <h2 className='text-2xl text-marine-blue font-bold mb-2' >Select your plan</h2>
            <p className='text-cool-gray mb-[22px]' >You have the option of monthly or yearly billing</p>
            <div className='flex flex-col gap-3 mb-6' >
              <FormUniqueOption isSelected={selectedPlanLocal === planOptions.arcadeMonth || selectedPlanLocal === planOptions.arcadeYear} name='Arcade' price={isMonthly ? '$9/mo' : '$90/yr'} icon={iconArcade} setFunction={setSelectedPlanLocal} value={isMonthly ? planOptions.arcadeMonth : planOptions.arcadeYear} />
              <FormUniqueOption isSelected={selectedPlanLocal === planOptions.advancedMonth || selectedPlanLocal === planOptions.advancedYear} name='Advanced' price={isMonthly ? '$12/mo' : '$120/yr'} icon={iconAdvanced} setFunction={setSelectedPlanLocal} value={isMonthly ? planOptions.advancedMonth : planOptions.advancedYear} />
              <FormUniqueOption isSelected={selectedPlanLocal === planOptions.proMonth || selectedPlanLocal === planOptions.proYear} name='Pro' price={isMonthly ? '$15/mo' : '$150/yr'} icon={iconPro} setFunction={setSelectedPlanLocal} value={isMonthly ? planOptions.proMonth : planOptions.proYear} />
            </div>
            <div className='flex h-12 rounded-lg bg-very-light-gray py-[14px] gap-6 justify-center items-center' >
              <p className='text-marine-blue font-medium text-sm' >Monthly</p>
              <div className={`w-[38px] h-[20px] rounded-[10px] bg-marine-blue flex items-center ${isMonthly ? 'justify-start' : 'justify-end'} p-1 cursor-pointer`} onClick={() => {
                setIsMonthly(!isMonthly)
                updateInfo('selectedAddsOn', [])
              }
              } >
                <span className='w-3 h-3 rounded-full bg-white' ></span>
              </div>
              <p className='text-cool-gray font-medium text-sm'>Yearly</p>
            </div>
          </form>
        </div>
      </div>
      <div className='flex justify-between p-4 items-center'>
        <div className='text-sm text-cool-gray cursor-pointer' onClick={() => runValidations('/')} >Go Back</div>
        <div className='w-[97px] h-[40px] bg-marine-blue text-white text-sm flex justify-center items-center rounded-[4px] cursor-pointer' onClick={() => runValidations('/adds-on')} >Next Step</div>
      </div>
    </div>
  )
}

export default SelectPlan
