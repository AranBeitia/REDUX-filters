const getData = (filters) => {
  const filter = Object.keys(filters)
  const value = Object.values(filter)
  console.log(filters)
  console.log(filter)
  return fetch(`http://localhost:3001/properties?${filter}=${value}`).then(
    (response) => Promise.all([response, response.json()])
  )
}

export default getData
