import { planOptions } from './../pages/form/SelectPlan';


export type AppContextStateType = {
  isFinished: boolean
  name: string
  email: string
  phone: string,
  isMothlyPlan: boolean,
  selectedPlan: planOptions  
}