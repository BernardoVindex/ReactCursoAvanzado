import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../continer/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export default () => {
  const { detailId } = useParams()

  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery detailId={detailId} />
    </Layout>
  )
}
