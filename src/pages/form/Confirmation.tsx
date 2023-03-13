import React from 'react'
import thanksIcon from '../../assets/images/icon-thank-you.svg'

const Confirmation = () => {
  return (

    <div className='flex flex-col grow md:items-center' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia md:pt-0 md:bg-white md:items-center'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] md:mt-0 md:p-0 md:w-[450px]' >
            <div className='flex flex-col items-center py-[47px] '>
              <div className='block w-[56px] h-[56px] mb-6 md:w-[80px] md:h-[80px] md:mb-8'>
                <img src={thanksIcon} alt='completed icon' className='w-full' />
              </div>
              <p className='font-bold text-2xl text-marine-blue text-center mb-[9px] md:text-[32px] md:font-bold md:mb-[14px] '>Thank you!</p>
              <p className='text-cool-gray text-center' >Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Confirmation
