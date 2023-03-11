import React from "react";
import axios from "axios";
import hotel from "../../assets/hotel.jpg"

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      isModalOpen: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    let url = "http://localhost:8080/user/login"
    axios.post(url, data)
      .then(res => {
        if (res.data.data.logged === true) {
          let id_user = res.data.data.id_user
          let user = res.data.data
          let role = res.data.data.role
          let token = res.data.data.token
          let email = res.data.data.email
          let user_name = res.data.data.user_name
          localStorage.setItem("id_user", id_user)
          localStorage.setItem("username", user_name)
          localStorage.setItem("user", JSON.stringify(user))
          localStorage.setItem("email", email)
          localStorage.setItem("token", token)
          localStorage.setItem("role", role)
          window.location = '/dashboard'
        } else {
          window.alert(res.data.message)
        }
      })
  }

  render() {
    return (
      <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
          <div className='w-full h-[550px] hidden md:block'>
            <img className='w-full h-full' src={hotel} alt="/" />
          </div>
          <div className='p-4 flex flex-col justify-around'>
            <form onSubmit={(e) => this.handleLogin(e)}>
              <h2 className='text-4xl font-bold text-center mb-8'>Wikusama Hotel</h2>
              <div>
                <input className='border p-2 my-4 w-full' type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} required />
                <input className='border p-2 w-full' type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='Password' required />
              </div>
              <button type="submit" className='w-full py-2 my-4 bg-sky-600 hover:bg-sky-500 text-white font-bold'>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}