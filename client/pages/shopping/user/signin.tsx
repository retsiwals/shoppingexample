import { observer } from 'mobx-react'
import * as React from 'react'
import userStore from '../../../stores/userStore'
import Link from 'next/link'

@observer
export default class SignIn extends React.Component {
  render(){
    return (
      <div>
        <Link href='../../shopping'><button>Home</button></Link>
        <p>Sign In</p>
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
        <button onClick={userStore.login}>Login</button>
        <Link href='./signup'><button>Sign Up</button></Link>
      </div>
    )
  }
}