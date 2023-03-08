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
  name: ''
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
  
  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement> ) => {
    dispatch({
      type: ReducerActionKind.HANDLE_CHANGE_FORM,
      payload: {
        name: e.target.name,
        value: e.target.value
      }
    })
  }
  
  
  return (
    <AppContext.Provider value={{
      ...state,
      updateForm,
      handleChangeForm
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextValueType
}

export  {AppProvider, useAppContext}
