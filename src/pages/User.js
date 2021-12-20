import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { SubmitButton } from '../components/SubmintButton'

export default () => {
  const { value: { removeAuth } } = useContext(AppContext)

  return (
    <>
      <h1>User</h1>
      <SubmitButton
        onClick={removeAuth}
      >
        Cerrar Session
      </SubmitButton>
    </>
  )
}
