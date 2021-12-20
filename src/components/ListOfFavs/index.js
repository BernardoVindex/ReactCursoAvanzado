import { Link, Grid, Image } from './styles'
import { PropTypes } from 'prop-types'

const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav =>
          <Link
            key={fav.id}
            to={`/detail/${fav.id}`}
            src={fav.src}
          >
            <Image src={fav.src} />
          </Link>
        )
      }
    </Grid>
  )
}

export { ListOfFavs }

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}
