import PropTypes from 'prop-types'
import { Button } from './styles'

const SubmitButton = ({ children, disabled, onClick }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export { SubmitButton }

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
