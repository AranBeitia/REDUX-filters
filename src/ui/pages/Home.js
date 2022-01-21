import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Button from '@mui/material/Button'
import Header from '../components/Header'
import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 4rem;
  background-color: papayawhip;
`

export const Block = styled.div`
  display: block;
  padding: 1rem 0;
`

const Home = () => {
  return (
    <>
      <Header title={'Home'} />
      <Container>
        <Wrapper>
          <h1>home</h1>
          <Button variant="contained">Hello</Button>
          <Block>
            <Link to="/dashboard">Dashboard</Link>
          </Block>
        </Wrapper>
      </Container>
    </>
  )
}

export default Home
