import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListofPhotoCards } from '../components/ListOfPhotoCards'

const Home = () => {
  const params = useParams()

  return (
    <>
      <ListOfCategories />
      <ListofPhotoCards categoryId={params.id} />
    </>
  )
}

export { Home }
