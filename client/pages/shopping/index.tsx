import { observer } from 'mobx-react'
import * as React from 'react'
import productStore from '../../stores/productStore'
import Link from 'next/link'
import { getProduct } from '../../api'

productStore.loadProduct()
@observer
class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Shopping Example Page</p>
        <Link href='shopping/user/signin'><button>Sign In</button></Link>
        <Link href='shopping/user/signup'><button>Sign Up</button></Link>

        <div>Content</div>
        {productStore.productList.map(item => {
          return (
            <div>
              <img width="150px" height="150px" src={item.image} />
              <div>{item.name}</div>
              <div>{item.price}</div>
              <button>Add to cart</button>
            </div>
          )
        })}
      </div>
    )
  }
}
export default MainPage