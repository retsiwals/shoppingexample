import { makeObservable, observable, autorun, action, runInAction } from 'mobx'
import { getProduct } from '../api'
class ProductStore {
  @observable productList = []
  constructor() {
    makeObservable(this)
  }
  @action loadProduct = () => {
    getProduct().then(data => {
      runInAction(() => {
        this.productList = data
      })
    })
    .catch(err=> console.log(err))
  }
}
const productStore = new ProductStore()
export default productStore
