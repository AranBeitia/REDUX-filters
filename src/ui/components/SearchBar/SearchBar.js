import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchFilter } from '../../../redux/filter/actions'
import { Button, Form } from 'react-bootstrap'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (result) dispatch(searchFilter(result))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="d-flex">
        <div className="position-relative">
          <Form.Control
            name="search"
            type="text"
            id="search"
            onChange={(e) => setResult(e.target.value)}
          />
          <span className="position-absolute search-icon fa fa-search"></span>
        </div>
        <Button type="submit">Send</Button>
      </Form.Group>
    </Form>
  )
}

export default SearchBar
