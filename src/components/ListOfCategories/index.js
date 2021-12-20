import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])

  useEffect(function () {
    window.fetch('https://petgramcuroavanzadoreact.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return { categories }
}

const ListOfCategoriesComponent = () => {
  const { categories } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 175
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories
          .map(category =>
            <Item key={category.id}>
              <Category
                {...category}
                path={`/pet/${category.id}`}
              />
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

const ListOfCategories = React.memo(ListOfCategoriesComponent)

export { ListOfCategories }
