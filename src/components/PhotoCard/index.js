import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import { ImgWrapper, Article, Img } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'

const DEFAUT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({ id, liked, likes = 0, src = DEFAUT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const { mutation } = useMuationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
