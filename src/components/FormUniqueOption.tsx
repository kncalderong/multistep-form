import { planOptions } from "../types/Form"

type FormUniqueOptionProps = {
  icon: string
  isSelected: boolean
  name: string
  price: string
  value: planOptions
  setFunction: React.Dispatch<React.SetStateAction<planOptions>>
}

const FormUniqueOption = ({  icon,  isSelected,  name,  price,  value,  setFunction}: FormUniqueOptionProps) => {
  return (
    <div className={`flex px-4 pt-[14px] pb-[18px] justify-start items-center ${isSelected ? 'border-purplish-blue bg-very-light-gray' : 'border-light-gray bg-white'} rounded-lg border-[1px] gap-[14px] cursor-pointer`} onClick={() => setFunction(value)}>
      <div className='block w-[40px] h-[40px]'>
        <img src={icon} alt="iconArcade" className='w-full' />
      </div>
      <div className='flex flex-col gap-[3px]' >
        <p className='text-marine-blue font-medium' >{name}</p>
        <p className='text-cool-gray text-sm' >{price}</p>
        {(value === planOptions.advancedYear || value === planOptions.arcadeYear || value === planOptions.proYear) && (<p className="text-marine-blue text-xs" >2 months free</p> )}
      </div>
    </div>
  )
}

export default FormUniqueOption
