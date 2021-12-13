import { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    window.fetch('https://petgramcuroavanzadoreact.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 175
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={fixed}>
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

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export { ListOfCategories }
