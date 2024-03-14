import React, { useState } from "react";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const handleSignup = () => {
//     navigate("/signup"); 
//   }
 
//     // const [ inputs, setInputs] = useState({
//     //   email: "",
//     //   password: "",
//     // });

//       const [ inputs , setInputs] = useState({
//         email :'',
//         password : '',
//       })

//       const handleInput = (e) => {
//             const { name, value } = e.target;
//             setInputs({
//               ...inputs,
//               [name]: value,
//             });
//           };

//         // const handleInputs = (e) =>{
//         //   const {name ,value} = e.target;
//         //   setInputs({
//         //     ...inputs,
//         //     [name]: value,
//         //   })
//         // }

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     console.log(inputs);
//   }
//   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <h1 className="text-center mt-5">Login</h1>

//         <div>
//           <Input 
//             isRequired
//             label="Email"
//             placeholder="Plese Enter Email"
//             name="email"
//             value={inputs.email}
//             onchange={handleInput}
//             type="email"
//           />
//           <Input
//             isRequired
//             label="Password"
//             placeholder="Plese Enter password"
//             name="password"
//             value={inputs.password}
//             onchange={handleInput}
//             type="password"
//           />
//           <Button className="mt-3">Login</Button>
//           <br />

//           <Button
//             className="mt-3"
//             bgColor="bg-transparent"
//             onClick={handleSignup}
//           >
//             Don't have account ? please login
//           </Button>
//         </div>
//       </form>
//     </Container>
//   );
// }

// export default Login;












function Login() {
  const navigate = useNavigate();

  // redirect to login page
  const handleSignup = () => {
    navigate("/signup");
  };

  // useState for set the value
  const [inputs, setInputs] = useState({
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
    navigate('/')
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 className="text-center mt-5">SignUp</h1>

        <div>
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

          <Button className="mt-3  ">Login</Button>
          <br />
          <Button
            className="mt-3"
            bgColor="bg-transparent"
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
