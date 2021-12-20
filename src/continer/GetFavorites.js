import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVORITES = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}
`

const RenderProp = ({ loading, data, error }) => {
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error...</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}

const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, { fecthPolicy: 'network-only' })

  return (
    <RenderProp
      loading={loading}
      data={data}
      error={error}
    />
  )
}

export { FavsWithQuery }
