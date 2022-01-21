import { Form } from 'react-bootstrap'

const Checkbox = ({ value, label, id }) => {
  return (
    <Form.Check
      id={id}
      label={label}
      value={value}
      type="checkbox"
      // onChange={() => handleChange}
    />
  )
}

export default Checkbox
