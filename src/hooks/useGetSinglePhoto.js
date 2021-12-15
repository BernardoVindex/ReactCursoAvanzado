import { gql, useQuery } from '@apollo/client'

const useGetSinglePhoto = (id) => {
  const getSinglePhoto = gql`
    query getSinglePhoto($id:ID!) {
      photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
  `

  const {
    loading,
    error,
    data
  } = useQuery(getSinglePhoto, { variables: { id } })

  return { loading, error, data }
}

export { useGetSinglePhoto }
