import { useState } from 'react'

const useInputVaule = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => {
    setValue(event.target.value)
  }

  return { value, onChange }
}

export { useInputVaule }
