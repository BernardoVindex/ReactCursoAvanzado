import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return (
    <AppContext.Provider value={{ value }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
