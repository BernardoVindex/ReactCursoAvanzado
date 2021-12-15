import { Link } from 'react-router-dom'
import { ImgWrapper, Article, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'

const DEFAUT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, likes = 0, src = DEFAUT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>

            <FavButton
              liked={liked}
              likes={likes}
              onClick={handleFavClick}
            />

          </>
      }

    </Article>
  )
}

export { PhotoCard }
