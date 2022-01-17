import { useSelector } from 'react-redux'
import { Container, ListGroup } from 'react-bootstrap'
import ListItem from './ListItem'

const ResultList = () => {
  const { data } = useSelector((state) => state.filter)
  const properties = data

  return (
    <Container>
      <ListGroup>
        {properties.length > 0 &&
          properties.map((item, index) => (
            <ListGroup.Item key={index}>
              <ListItem
                street={item.street}
                price={item.price}
                status={item.status}
              />
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  )
}

export default ResultList
