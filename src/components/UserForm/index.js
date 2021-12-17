import { useInputVaule } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles'

const UserForm = ({ onSubmit, title }) => {
  const email = useInputVaule('')
  const password = useInputVaule('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='Email'
          {...email}
        />
        <Input
          placeholder='Password'
          type='password'
          {...password}
        />
        <Button>{title}</Button>
      </Form>
    </>
  )
}

export { UserForm }
