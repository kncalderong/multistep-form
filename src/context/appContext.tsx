import React, { useContext, createContext, useState, useReducer } from 'react'
import { AppContextValueType, AppContextStateType } from '../types'
import { ReducerActionKind } from '../types'
import reducer from './reducer'


const AppContext = createContext<AppContextValueType | null>(null)

type AppProviderProps = {
  children: React.ReactNode
}

export const initialState: AppContextStateType  = {
  isFinished: false,
  name: '',
  email: '',
  phone: ''
}

const AppProvider = ({children }: AppProviderProps) => {
  const [state , dispatch] = useReducer(reducer, initialState)
  
  const updateInfo = (key: string, value: any) => {
    dispatch({
      type: ReducerActionKind.UPDATE_FORM, payload: {
        key,
        value
      }
    })
  }
  
  console.log('state: ', state);
  
  
  return (
    <AppContext.Provider value={{
      ...state,
      updateInfo
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextValueType
}

export  {AppProvider, useAppContext}
