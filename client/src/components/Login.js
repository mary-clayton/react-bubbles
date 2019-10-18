import React, {useState} from "react";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import styled from 'styled-components'
import image from './img/bubbles.jpg'

const LoginStyle = styled.div `
display: flex;
flex-flow: column;
margin:  5% 0 0 50%;

h1 {
    margin-bottom: 3%;
    color: lightpink;
}
form {
    display: flex;
flex-flow: column wrap;
align-items: center;
}
input {
width: 300px;
height: 30px;
margin: 1%;
font-size: 1rem;
}
label {
    font-size: 1.1rem;
}
button {
    width: 150px;
    height: 40px;
    font-size: 1rem;
    background: lightpink;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 14px;
}
`


const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials(
     { ...credentials,
      [e.target.name]: e.target.value
     })
     } //end handlechange

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubbles')
    })
    .catch(err => console.log(err));
  }
  return (
    <div className="login">
    <LoginStyle className="loginpage">
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
    <label>Username:</label>
    <input 
                    type="text"
                     name="username"
                     value={credentials.username}
                     onChange={handleChange} required
                     />
                      <label>Password:</label>
   <input 
                    type="password"
                     name="password"
                     value={credentials.password}
                     onChange={handleChange} required
                     />
                     <button>Log in</button>
      </form>
    </LoginStyle>
    </div>
  );
};

export default Login;
