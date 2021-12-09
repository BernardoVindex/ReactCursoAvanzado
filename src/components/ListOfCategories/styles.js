import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.li`
 padding: 0 8px;
`

export { List, Item }
