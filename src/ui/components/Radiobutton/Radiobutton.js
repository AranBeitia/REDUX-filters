import { Form } from 'react-bootstrap'

const Radiobutton = ({ value, label, id, name }) => {
  return (
    <Form.Check
      id={id}
      label={label}
      name={name}
      value={value}
      type="radio"
      // onChange={handleChange}
    />
  )
}

export default Radiobutton
