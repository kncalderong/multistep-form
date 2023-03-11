import { addsOptions } from './../pages/form/AddsOn';
import { planOptions } from './../pages/form/SelectPlan';



export type AppContextStateType = {
  isFinished: boolean
  name: string
  email: string
  phone: string,
  isMonthlyPlan: boolean,
  selectedPlan: planOptions,
  selectedAddsOn: addsOptions[]  
}