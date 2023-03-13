import { addsOptions, planOptions } from './Form';

export type AppContextStateType = {
  isFinished: boolean
  name: string
  email: string
  phone: string,
  isMonthlyPlan: boolean,
  selectedPlan: planOptions,
  selectedAddsOn: addsOptions[]  
}