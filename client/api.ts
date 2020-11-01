export const getProduct = ():Promise<any[]>=>{
  return fetch('http://[::1]:3001/products', {
    method: 'get',
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}
