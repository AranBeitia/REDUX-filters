import { useEffect, useState } from 'react'

import getData from '../../services/server'

import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CheckboxFeed from '../components/Checkbox/CheckboxFeed'
import Multirange from '../components/MultiRange/MultiRange'

const Dashboard = () => {
  const [properties, setProperties] = useState()

  useEffect(() => {
    const data = getData('http://localhost:3001/properties')
    setProperties(data)
  }, [])
  const fields = ['hi', 'ho']
  return (
    <>
      <Header />
      <Container>
        <h1>dashboard</h1>
        {/* {properties && properties.map((item) => console.log(item))} */}
        <CheckboxFeed fields={fields} label={'Type of home'} />
        <CheckboxFeed fields={fields} label={'Condition'} />
        <CheckboxFeed fields={fields} label={'Bedrooms'} />
        <CheckboxFeed fields={fields} label={'Bathrooms'} />
        <CheckboxFeed fields={fields} label={'More filters'} />
        <Multirange min={10} max={2000} onChange={() => null} />
      </Container>
    </>
  )
}

export default Dashboard
