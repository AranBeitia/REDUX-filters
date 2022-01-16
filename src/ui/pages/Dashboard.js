import { useEffect, useState } from 'react'

import getData from '../../services/server'

import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CheckboxFeed from '../components/Checkbox/CheckboxFeed'
import Multirange from '../components/MultiRange/MultiRange'
import ResultList from '../components/ResultList'

const Dashboard = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    getData('http://localhost:3001/properties').then((data) =>
      setProperties(data)
    )
  }, [])
  const typeOfHome = filterOptions('type')
  const condition = filterOptions('condition')
  const bedrooms = filterOptions('room')
  const bathrooms = filterOptions('bath')
  // const pet = filterOptions('pet')

  function filterOptions(props) {
    const propsArray = []
    if (properties) {
      properties.forEach((item) => {
        if (!propsArray.includes(item[props])) {
          propsArray.push(item[props])
        }
      })
    }
    return propsArray
  }
  return (
    <>
      <Header />
      <Container>
        <h1>dashboard</h1>
        <section>
          <h2>Filters</h2>
          <CheckboxFeed fields={typeOfHome} label={'Type of home'} />
          <CheckboxFeed fields={condition} label={'Condition'} />
          <CheckboxFeed fields={bedrooms} label={'Bedrooms'} />
          <CheckboxFeed fields={bathrooms} label={'Bathrooms'} />
          {/* <CheckboxFeed fields={pet} label={'Pets allowed'} /> */}
          {properties.length && (
            <Multirange
              min={Math.min(...properties.map((value) => value.price))}
              max={Math.max(...properties.map((value) => value.price))}
              onChange={() => null}
            />
          )}
        </section>
        <section>
          <h2>Result list</h2>
          <ResultList properties={properties} />
        </section>
      </Container>
    </>
  )
}

export default Dashboard
