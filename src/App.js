import { GobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogoPetgram } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'

const App = () => {
  console.log(<Detail />)
  return (
    <div>
      <GobalStyles />
      <BrowserRouter>
        <LogoPetgram />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          <Route path='/favs' render={() => isLogged ? <Favs /> : <Redirect to='/register' />} />
          <Route path='/user' render={() => isLogged ? <User /> : <Redirect to='/register' />} />
          <Route path='*' element={<h1>Error Not Found</h1>} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  )
}

export { App }
