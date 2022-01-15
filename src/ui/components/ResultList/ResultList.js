import { Container, ListGroup } from 'react-bootstrap'
import ListItem from './ListItem'

const ResultList = ({ products }) => {
  return (
    <Container>
      <ListGroup>
        {products &&
          products.map((item) => (
            <ListGroup.Item>
              <p>{item.price}</p>
              {/* <ListItem item={item} /> */}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Container>
  )
}

export default ResultList
