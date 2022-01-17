import { Form } from 'react-bootstrap'
import Checkbox from '../Checkbox/Checkbox'
import Multirange from '../MultiRange/MultiRange'

const FilterForm = () => {
  return (
    <Form className="d-flex">
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Checkbox
            type="checkbox"
            value={'flat/apartment'}
            label={'Flat or apartment'}
            id={'flat(apartment'}
          />
          <Checkbox
            type="checkbox"
            value={'house'}
            label={'House'}
            id={'House'}
          />
          <Checkbox
            id={'duplex'}
            type="checkbox"
            value={'duplex'}
            label={'Duplex'}
          />
          <Checkbox
            id={'penthouse'}
            type="checkbox"
            value={'penthouse'}
            label={'Penthouse'}
          />
        </Form.Group>
      </div>
      <Multirange min={1000} max={50000} onChange={() => null} />
    </Form>
  )
}

export default FilterForm
