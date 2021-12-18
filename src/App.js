import { GobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogoPetgram } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { AppContext } from './AppContext'
import { useContext } from 'react'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const App = () => {
  const { value: { isAuth } } = useContext(AppContext)

  console.log(isAuth)
  return (
    <div>
      <GobalStyles />
      <BrowserRouter>
        <LogoPetgram />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} />
          <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
          <Route path='/register' element={<NotRegisteredUser />} />
          <Route path='*' element={<h1>Error Not Found</h1>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}

export { App }
