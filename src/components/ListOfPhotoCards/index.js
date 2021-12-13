import { PhotoCard } from '../PhotoCard'

const ListofPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(id => <PhotoCard key={id} />)
      }
    </ul>
  )
}

export { ListofPhotoCards }
