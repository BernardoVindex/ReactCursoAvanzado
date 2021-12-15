import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'

const PhotoCardWithQuery = ({ id }) => {
  const { loading, data } = useGetSinglePhoto(id)

  if (loading) return null

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}

export { PhotoCardWithQuery }
