import { Container, ListGroup } from 'react-bootstrap'
import ListItem from './ListItem'

const ResultList = ({ properties }) => {
  return (
    <Container>
      <ListGroup>
        {properties &&
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
