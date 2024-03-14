import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "../axios/axios";
import { useAuth } from "../contextApi/store";
// import CheckBox from '../components/CheckBox'

function Signup() {
  const navigate = useNavigate();
  const {storeTokenInLS} =useAuth();

  // redirect to login page
  const handleLogin = () => {
    navigate("/login");
  };

  // useState for set the value
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("Unique Email");
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
    console.log(inputs);
    try {
      const res = await axios.post("signup", inputs);
      if (res) {
        console.log("res data from server", res.data.token);
        storeTokenInLS(res.data.token);
        // setInputs({ userName: "", email: "", password: "" });
        alert(" Sign-Up Successful");
        navigate('/')
      }
    } catch (error) {
      if (error.response.status === 409) {
        setMessage(error.response.data.msg);
      } else {
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 className="text-center mt-5">SignUp</h1>
        <h2>{message && <p>{message}</p>}</h2>

        <div>
          <Input
            label="UserName"
            placeholder="Plese Enter UserName"
            type="text"
            id="userName"
            name="userName"
            value={inputs.userName}
            onChange={handleInput}
            isRequired
          />
          <Input
            label="Email"
            placeholder="Plese Enter Email"
            type="email"
            id="email"
            name="email"
            value={inputs.email}
            onChange={handleInput}
            isRequired
            autoComplete="current-email"
          />
          <Input
            label="Password"
            placeholder="Plese Enter Password"
            type="password"
            id="password"
            name="password"
            value={inputs.password}
            onChange={handleInput}
            isRequired
            autoComplete="current-password"
          />

          <Button className="mt-3" type="submit">
            Sign-Up
          </Button>
          <br />
          <Button
            className="mt-3"
            type="button"
            bgColor="bg-transparent"
            onClick={handleLogin}
          >
            All ready Sign-up ? please register
          </Button>
        </div>
      </Container>
    </form>
  );
}

export default Signup;
