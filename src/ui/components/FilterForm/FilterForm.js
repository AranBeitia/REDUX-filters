import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingData } from '../../../redux/result/actions'
import {
  changeTypeHome,
  changeCondition,
  changeBedrooms,
  changeBathrooms,
} from '../../../redux/filter/actions'
import { Form } from 'react-bootstrap'
import Multirange from '../MultiRange/MultiRange'

const FilterForm = () => {
  const filters = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingData(filters))
  }, [filters])

  // console.log(Math.min(...filters.map((item) => item.price)))
  // console.log(Math.max(...filters.map((item) => item.price)))
  return (
    <Form className="d-flex">
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Form.Check
            type="checkbox"
            value={'flat/apartment'}
            label={'Flat or apartment'}
            id={'flat-apartment'}
            name={'flat'}
            onChange={(e) => dispatch(changeTypeHome(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            value={'house'}
            label={'House'}
            id={'house'}
            name={'house'}
            onChange={(e) => dispatch(changeTypeHome(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={'duplex'}
            value={'duplex'}
            label={'Duplex'}
            name={'duplex'}
            onChange={(e) => dispatch(changeTypeHome(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={'penthouse'}
            value={'penthouse'}
            label={'Penthouse'}
            name={'penthouse'}
            onChange={(e) => dispatch(changeTypeHome(e.target.value))}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check
            type="checkbox"
            value={'new'}
            label={'New homes'}
            id={'new'}
            name={'new'}
            onChange={(e) => dispatch(changeCondition(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            value={'good'}
            label={'Good'}
            id={'good'}
            name={'good'}
            onChange={(e) => dispatch(changeCondition(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={'renovation'}
            value={'renovation'}
            label={'Needs renovation'}
            name={'renovation'}
            onChange={(e) => dispatch(changeCondition(e.target.value))}
          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Check
            type="checkbox"
            id={1}
            value={1}
            name={1}
            label={1}
            onChange={(e) => dispatch(changeBedrooms(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={2}
            value={2}
            name={2}
            label={2}
            onChange={(e) => dispatch(changeBedrooms(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={3}
            value={3}
            name={3}
            label={3}
            onChange={(e) => dispatch(changeBedrooms(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={4}
            value={4}
            name={4}
            label={'4+'}
            onChange={(e) => dispatch(changeBedrooms(e.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Check
            type="checkbox"
            value={1}
            label={1}
            id={1}
            name={1}
            onChange={(e) => dispatch(changeBathrooms(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            value={2}
            label={2}
            id={2}
            name={2}
            onChange={(e) => dispatch(changeBathrooms(e.target.value))}
          />
          <Form.Check
            type="checkbox"
            id={3}
            value={3}
            label={3}
            name={3}
            onChange={(e) => dispatch(changeBathrooms(e.target.value))}
          />
        </Form.Group>
      </div>
      <Multirange min={100000} max={600000} onChange={() => null} />
    </Form>
  )
}

export default FilterForm
