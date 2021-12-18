import { useInputVaule } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles'

const UserForm = ({ error, disabled, onSubmit, title }) => {
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
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder='Email'
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder='Password'
          type='password'
          {...password}
        />
        <Button
          disabled={disabled}
        >
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}

export { UserForm }
