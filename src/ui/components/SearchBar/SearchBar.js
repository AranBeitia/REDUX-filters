import { Form } from 'react-bootstrap'

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="position-relative">
        <Form.Control name="search" className="mb-3" type="text" id="search" />
        <span className="position-absolute search-icon fa fa-search"></span>
      </Form.Group>
    </Form>
  )
}

export default SearchBar
