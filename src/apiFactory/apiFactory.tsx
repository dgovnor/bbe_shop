const getPhotos = async () => {
  const requestOptions = Object.assign({
    method: 'GET',
  })

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos`,
    requestOptions
  )
  const parsedData = await response.json()
  const size = 3

  return parsedData.slice(0, size)
}

export { getPhotos }
