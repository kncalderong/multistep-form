import React from 'react'
import thanksIcon from '../../assets/images/icon-thank-you.svg'

const Confirmation = () => {
  return (

    <div className='flex flex-col grow' >
      <div className='flex justify-center items-start p-4 grow bg-magnolia'>
        <div className='bg-white py-8 px-6 w-full rounded-[10px] mt-[-89px] ' >
            <div className='flex flex-col items-center py-[47px]'>
              <div className='block w-[56px] h-[56px] mb-6'>
                <img src={thanksIcon} alt='completed icon' className='w-full' />
              </div>
              <p className='font-bold text-2xl text-marine-blue text-center mb-[9px]'>Thank you!</p>
              <p className='text-cool-gray text-center' >Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Confirmation
