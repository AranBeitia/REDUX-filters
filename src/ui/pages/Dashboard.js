import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import FilterForm from '../components/FilterForm'
import ResultList from '../components/ResultList'

const Dashboard = () => {
  return (
    <>
      <Header title={'Dashboard'} />
      <Container className="mt-4">
        <h2>Search</h2>
        <SearchBar />
        <section>
          <h2>Filters</h2>
          <FilterForm />
        </section>
        <section>
          <h2>Result list</h2>
          <ResultList />
        </section>
      </Container>
    </>
  )
}

export default Dashboard
