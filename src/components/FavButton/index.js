import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button
      onClick={onClick}
    >
      <Icon size='32px' />
      {likes} likes!
    </Button>
  )
}

export { FavButton }
