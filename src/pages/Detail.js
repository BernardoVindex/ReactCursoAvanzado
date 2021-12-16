import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../continer/PhotoCardWithQuery'

const Detail = () => {
  const { detailId } = useParams()

  return (
    <PhotoCardWithQuery detailId={detailId} />
  )
}

export { Detail }
