import { makeObservable, observable, autorun, action } from 'mobx'
import { getProduct } from '../api'
class ProductStore {
  @observable productList = []
  constructor() {
    makeObservable(this)
  }
  @action loadProduct = () => {
    getProduct().then(data => {
      this.productList = data
    })
  }
}
const productStore = new ProductStore()
export default productStore
