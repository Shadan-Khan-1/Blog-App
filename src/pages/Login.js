import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { useAuth } from "../contextApi/store";

function Login() {
  const navigate = useNavigate();
  const {storeTokenInLS} =useAuth();

  // redirect to login page
  const handleSignup = () => {
    navigate("/signup");
  };

  // useState for set the value
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState('')
  // handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    // navigate('/')
    try {
      const res = await axios.post('/login',inputs);
      if (res) {
       console.log("this is response OK Data",res.data.token); 
       storeTokenInLS(res.data.token); 
        navigate('/')
      }
    } catch (error){
      if (error.response.status === 401) {
        setMessage(error.response.data.message)
      } else {
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 className="text-center mt-5">Login</h1>
        <h2>{message && <p>{message}</p>}</h2>
        <div>
          <Input
            label="Email"
            id='email'
            placeholder="Plese Enter Email"
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleInput}
            isRequired
            autoComplete="current-email"
          />
          <Input
            label="Password"
            placeholder="Plese Enter Password"
            id= 'password'
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInput}
            isRequired
            autoComplete="current-password"
          />

          <Button className="mt-3  ">Login</Button>
          <br />
          <Button
            className="mt-3"
            bgColor="$yellow-600"
            type="button"
            onClick={handleSignup}
          >
            Don't have account 
          </Button>
        </div>
      </Container>
    </form>
  );
}

export default Login;
