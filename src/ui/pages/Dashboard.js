import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData } from '../../redux/result/actions'

import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import FilterForm from '../components/FilterForm'
import ResultList from '../components/ResultList'

const Dashboard = () => {
  const { filters } = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingData())
    // dispatch(rangeFilter())
  }, [filters])

  return (
    <>
      <Header title={'Dashboard'} />
      <Container className="mt-4">
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
