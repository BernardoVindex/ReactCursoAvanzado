import { Category } from '../Category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

const ListOfCategories = () => {
  return (
    <List>
      {
        categories
          .map(category =>
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          )
      }
    </List>
  )
}

export { ListOfCategories }
