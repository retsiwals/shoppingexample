import * as React from 'react'
import App from 'next/app'
import userStore from '../../../stores/userStore'
import {inject, observer} from 'mobx-react'
import Link from 'next/link'
// @inject('userStore')
@observer
class SignUp extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    // const userStore = this.props.userStore
    return (
      <div>
        <Link href='../../shopping'><p>Home</p></Link>
        <p>Sign Up</p>
        <input 
        type="text" 
        placeholder="email" 
        name='email' 
        onChange={(e)=> {userStore.setdata(e.target.value,e.target.name)}} 
        value= {userStore.email} />
        <input 
        type="text" 
        placeholder="Password" 
        name='password' 
        onChange={(e)=> {userStore.setdata(e.target.value,e.target.name)}}
         value={userStore.password}/>
        <button onClick={userStore.submit}>Create</button>
        <Link href='./signin'><button>Sign In</button></Link>
      </div>
    )
  }
}
export default SignUp