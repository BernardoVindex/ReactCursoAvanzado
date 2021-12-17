import { useContext } from 'react'
import { AppContext } from '../AppContext.js'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../continer/RegisterMutation.js'


const NotRegiteredUser = () => {
  const { activateAuth } = useContext(AppContext)

  const handleSubmit = event => {
    event.preventDefault()
    login(event)
  }

  return (
    <section>
      <RegisterMutation>
        {
          (register) => {
            const onSubmit= ({ email, password}) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(activateAuth)
            }

            return <UserForm title='Registrarse' onSubmit={handleSubmit} />
          }
        }
      </RegisterMutation>
    </section>
  )
}

export { NotRegiteredUser }
