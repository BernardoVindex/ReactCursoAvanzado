import { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <AppContext.Provider value={{ value }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
