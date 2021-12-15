import { GobalStyles } from './styles/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogoPetgram } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'

const App = () => {
  return (
    <div>
      <GobalStyles />
      <BrowserRouter>
        <LogoPetgram />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route ptth='/detail/detailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export { App }
