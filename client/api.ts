export const getProduct = (): Promise<any[]> => {
  return fetch('http://[::1]:3001/products', {
    method: 'get',
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}
export const getUserId = (token): Promise<any> => {
  return fetch('http://[::1]:3001/users/me', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}