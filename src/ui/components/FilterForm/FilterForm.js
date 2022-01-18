import { useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import Radiobutton from '../Radiobutton'
import Checkbox from '../Checkbox/Checkbox'
import Multirange from '../MultiRange/MultiRange'

const FilterForm = () => {
  const { data } = useSelector((state) => state.filter)
  console.log(Math.min(...data.map((item) => item.price)))
  console.log(Math.max(...data.map((item) => item.price)))
  return (
    <Form className="d-flex">
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Radiobutton
            value={'flat/apartment'}
            label={'Flat or apartment'}
            id={'flat-apartment'}
            name={'home'}
          />
          <Radiobutton
            value={'house'}
            label={'House'}
            id={'House'}
            name={'home'}
          />
          <Radiobutton
            id={'duplex'}
            value={'duplex'}
            label={'Duplex'}
            name={'home'}
          />
          <Radiobutton
            id={'penthouse'}
            value={'penthouse'}
            label={'Penthouse'}
            name={'home'}
          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Radiobutton
            value={'new'}
            label={'New homes'}
            id={'new'}
            name={'condition'}
          />
          <Radiobutton
            value={'good'}
            label={'Good'}
            id={'good'}
            name={'condition'}
          />
          <Radiobutton
            id={'renovation'}
            value={'renovation'}
            label={'Needs renovation'}
            name={'condition'}
          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bedrooms</Form.Label>
          <Radiobutton id={'1'} value={1} name={'bedrooms'} label={'1'} />
          <Radiobutton id={'2'} value={2} name={'bedrooms'} label={'2'} />
          <Radiobutton id={'3'} value={3} name={'bedrooms'} label={'3'} />
          <Radiobutton id={'4'} value={4} name={'bedrooms'} label={'4+'} />
        </Form.Group>
        <Multirange min={100000} max={600000} onChange={() => null} />
      </div>
    </Form>
  )
}

export default FilterForm
