import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GobalStyles } from './styles/GlobalStyles'
import React, { useContext, Suspense } from 'react'
import { LogoPetgram } from './components/Logo'
import { NavBar } from './components/NavBar'
import { AppContext } from './AppContext'
import { Home } from './pages/Home'
// import { Favs } from './pages/Favs'
// import { Detail } from './pages/Detail'
// import { User } from './pages/User'
// import { NotRegisteredUser } from './pages/NotRegisteredUser'

const Favs = React.lazy(() => import('./pages/Favs'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

const App = () => {
  const { value: { isAuth } } = useContext(AppContext)

  console.log(isAuth)
  return (
    <Suspense fallback={<div />}>
      <GobalStyles />
      <BrowserRouter>
        <LogoPetgram />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <Navigate to='/login' />} />
          <Route path='/user' element={isAuth ? <User /> : <Navigate to='/login' />} />
          <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate to='/' />} />
          <Route path='*' element={<h1>Error Not Found</h1>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </Suspense>
  )
}

export { App }
