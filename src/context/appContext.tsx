import React, { useContext, createContext, useState, useReducer } from 'react'
import { AppContextValueType, AppContextStateType } from '../types'
import { ReducerActionKind } from '../types/ReducerActionKind'
import reducer from './reducer'


const AppContext = createContext<AppContextValueType | null>(null)

type AppProviderProps = {
  children: React.ReactNode
}

export const initialState: AppContextStateType  = {
  isFinished: false
}

const AppProvider = ({children }: AppProviderProps) => {
  const [state , dispatch] = useReducer(reducer, initialState)
  
  const updateForm = () => {
    dispatch({
      type: ReducerActionKind.FINISH_FORM, payload: {
        isFinished: true
      }
    })
  }
  
  
  return (
    <AppContext.Provider value={{
      ...state,
      updateForm
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextValueType
}

export  {AppProvider, useAppContext}
