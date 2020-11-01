import { makeObservable, observable, autorun, action } from 'mobx'
import MainPage from '../pages/shopping'
class UserStore {
  @observable email: string = ''
  @observable password: string = ''
  @observable token: string = ''
  @observable isEnable: boolean = false
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
        this.token = data.token
        this.email = ''
        this.password = ''
        if(data.token){
          window.location.href = '/shopping'
        }
      })

    
  }
  @action Logout = () => {
    this.token = ''
    this.isEnable = true
  }
}
const userStore = new UserStore()
export default userStore
