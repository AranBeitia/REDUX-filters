const getData = (filters) => {
  let url = ''
  if (filters[0]) {
    Object.entries(filters).forEach(
      ([key, value]) => (url += `&${key}=${value}`)
    )
  } else {
    url = ''
  }
  console.log(url)

  return fetch(`http://localhost:3001/properties?${url}`).then((response) =>
    Promise.all([response, response.json()])
  )
}

export default getData
