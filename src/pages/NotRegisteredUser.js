import { useContext } from 'react'
import { AppContext } from '../AppContext.js'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../continer/RegisterMutation.js'
import { LoginMutation } from '../continer/LoginMutation.js'

export default () => {
  const { value: { activateAuth } } = useContext(AppContext)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'El usuario ya exite o hay un problema'

            return (
              <UserForm
                title='Registrarse'
                onSubmit={onSubmit}
                error={errorMsg}
                disabled={loading}
              />
            )
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { error, loading, data }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(response => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'El usuario o la contraseña no existen'

            return (
              <UserForm
                title='Iniciar Sesión' onSubmit={onSubmit}
                error={errorMsg}
                disabled={loading}
              />
            )
          }
        }
      </LoginMutation>
    </>
  )
}
