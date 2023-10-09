import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import hotel from "../../assets/hotel-login.jpeg";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email_customer: "",
      password_customer: "",
      isModalOpen: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token && role === "customer") {
      window.location.href = "/home";
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: this.state.email_customer,
      password: this.state.password_customer,
    };
    let url = "http://localhost:8080/customer/login";
    axios
      .post(url, data)
      .then((response) => {
        this.setState({ logged: response.data.data.logged });
        if (response.status === 200) {
          let id = response.data.data.id_customer;
          let token = response.data.data.token;
          let role = response.data.data.role;
          let email = response.data.data.email;
          localStorage.setItem("id_customer", id);
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("email", email);
          alert("Success Login");
          window.location.href = "/home";
        } else {
          alert(response.data.message);
          this.setState({ message: response.data.message });
        }
      })
      .catch((error) => {
        console.log("error", error.response.status);
        if (error.response.status === 500 || error.response.status === 404) {
          window.alert("Failed to LogIn Wikusama Hotel as Customer");
        }
      });
  };

  render() {
    return (
      <div className="w-full h-screen flex">
        <div className=" m-auto h-[400px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
          <div className="p-10 flex flex-col justify-center items-center">
            <form onSubmit={(e) => this.handleLogin(e)}>
              <h2 className="text-3xl font-semibold text-center mb-8 text-violet-800">
                Wikusama Hotel
              </h2>
              <div>
                <input
                  className="border p-2 my-4 w-full"
                  type="email"
                  name="email_customer"
                  placeholder="Email"
                  value={this.state.email_customer}
                  onChange={this.handleChange}
                  required
                />
                <input
                  className="border p-2 w-full"
                  type="password"
                  name="password_customer"
                  value={this.state.password_customer}
                  onChange={this.handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 my-4 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold"
              >
                Log In
              </button>
            </form>
            <h6 className="text-center">
              Don't have an account?{" "}
              <NavLink to="/register" className="text-violet-800 underline">
                Register
              </NavLink>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
