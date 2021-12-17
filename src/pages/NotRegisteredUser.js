import { useContext } from 'react'
import { AppContext } from '../AppContext.js'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../continer/RegisterMutation.js'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(AppContext)

  console.log(activateAuth)
  return (
    <>
      <RegisterMutation>
        {
          (register) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(activateAuth)
            }

            return <UserForm title='Registrarse' onSubmit={onSubmit} />
          }
        }
      </RegisterMutation>
      <UserForm title='Iniciar Sesión' onSubmit={activateAuth} />
    </>
  )
}

export { NotRegisteredUser }
