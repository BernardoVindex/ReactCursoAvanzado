import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListofPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const params = useParams()

  return (

    <Layout
      title='Petgram - Tu app de fotos de masctoas'
      subtitle='Con Petgram puedes encontrar fotos de animales domésticos bien monetos uwu'
    >
      <ListOfCategories />
      <ListofPhotoCards categoryId={params.id} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.params === props.params
})

export { Home }
