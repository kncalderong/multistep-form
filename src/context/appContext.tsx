import React, { useContext, createContext, useState } from 'react'
import { AppContextValue } from '../types/AppContext'

const AppContext = createContext<AppContextValue | null>(null)

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = ({children }: AppProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  return (
    <AppContext.Provider value={{
      isLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextValue
}

export  {AppProvider, useAppContext}
