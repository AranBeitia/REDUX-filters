const ListItem = ({ street, price, status }) => {
  return (
    <>
      <span>Street: {street} - </span>
      <span>Price: {price} - </span>
      <span>Status: {status} </span>
    </>
  )
}

export default ListItem
