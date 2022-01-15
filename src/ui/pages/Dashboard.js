import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CheckboxFeed from '../components/Checkbox/CheckboxFeed'
import Multirange from '../components/MultiRange/MultiRange'

const Dashboard = () => {
  const fields = ['hi', 'ho']
  return (
    <>
      <Header />
      <Container>
        <h1>dashboard</h1>
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
