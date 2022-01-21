import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchingData } from '../../../redux/result/actions'
import { changeTypeHome, changeCondition } from '../../../redux/filter/actions'
import { Form } from 'react-bootstrap'
import Radiobutton from '../Radiobutton'
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
      </div>
      <div className="px-3">
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
