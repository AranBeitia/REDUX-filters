const getData = (filters) => {
  let url = ''

  Object.entries(filters).forEach(([key, value]) => {
    if (value.length > 0) {
      const string = value.join(`&${key}=`)
      console.log(string)
      url += `&${key}=${string}`
    }
  })

  return fetch(`http://localhost:3001/properties?${url}`).then((response) =>
    Promise.all([response, response.json()])
  )
}

export default getData
