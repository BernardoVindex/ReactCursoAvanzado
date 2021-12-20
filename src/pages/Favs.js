import { FavsWithQuery } from '../continer/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return (
    <Layout
      title='Tus favoritos'
      subtitle='Aquí puedes encontrar tus favoritos'
    >
      <FavsWithQuery />
    </Layout>
  )
}
