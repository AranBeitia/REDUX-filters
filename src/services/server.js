const getData = (url) => {
  return fetch(url).then((response) => Promise.all([response, response.json()]))
}

export default getData
