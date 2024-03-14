import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
// import CheckBox from '../components/CheckBox'

function Signup() {
  const navigate = useNavigate();

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

  // handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 className="text-center mt-5">SignUp</h1>

        <div>
         
          <Input
            label="UserName"
            placeholder="Plese Enter UserName"
            type="text"
            name="userName"
            value={inputs.userName}
            onChange={handleInput}
            isRequired 
          />
          <Input
            label="Email"
            placeholder="Plese Enter Email"
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleInput}
            isRequired 
          />
          <Input
            label="Password"
            placeholder="Plese Enter Password"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleInput}
            isRequired 
          />

         

          <Button className="mt-3  ">Sign-Up</Button>
          <br />
          <Button
            className="mt-3"
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
