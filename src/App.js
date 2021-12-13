import { ListOfCategories } from './components/ListOfCategories'
import { GobalStyles } from './styles/GlobalStyles'
import { ListofPhotoCards } from './components/ListOfPhotoCards'
import { LogoPetgram } from './components/Logo'

const App = () => (
  <div>
    <GobalStyles />
    <LogoPetgram />
    <ListOfCategories />
    <ListofPhotoCards />
  </div>
)

export { App }
