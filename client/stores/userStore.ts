import { makeObservable, observable, autorun, action, runInAction } from 'mobx'
import { getUserId } from '../api'
import {useRouter} from 'next/router'
import MainPage from '../pages/shopping'

const router = useRouter()
class UserStore {
  @observable userId: string = ''
  @observable email: string = ''
  @observable password: string = ''
  @observable token: string = ''
  @observable isEnable: string = ""
  constructor() {
    makeObservable(this)
  }
  @action setdata = (value: string, name: string) => {
    if (name === 'email') {
      this.email = value
    }
    else if (name === 'password') {
      this.password = value
    }
  }
  @action submit = () => {
    fetch('http://[::1]:3001/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      }),

    })
      .then(respond => { return respond.json() })
      .then(data => {
        if (data.error) {
          console.log(data.error.message)
        }
        else {
          console.log(data)
        }

      })
      .catch(err => console.log(err))
    this.email = ''
    this.password = ''
  }
  @action login = () => {
    fetch('http://[::1]:3001/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password
      }),

    }).then(respond => { return respond.json() })
      .then(data => {
        runInAction(() => {
          this.token = data.token
          this.email = ''
          this.password = ''
          
          if (data.token) {
            router.push('/shopping')
            getUserId(this.token).then(data => {
              this.userId = data.id
            })
            
            
          }
        })

      })
    
  }
  @action Logout = () => {
    this.token = ''
    this.isEnable = "block"
    this.userId = ''
  }
}
const userStore = new UserStore()
export default userStore
