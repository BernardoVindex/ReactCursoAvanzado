import { PhotoCard } from '../components/PhotoCard'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto'

const PhotoCardWithQuery = ({ detailId }) => {
  const { loading, data } = useGetSinglePhoto(detailId)

  if (loading) return null

  const { photo = { } } = data

  return <PhotoCard {...photo} />
}

export { PhotoCardWithQuery }
