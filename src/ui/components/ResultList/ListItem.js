import { ListGroup } from 'react-bootstrap'

const ListItem = (props) => {
  const { street, price, status } = props
  return (
    <>
      <span>{street}</span>
      <span>{price}</span>
      <span>{status} </span>
    </>
  )
}

export default ListItem
