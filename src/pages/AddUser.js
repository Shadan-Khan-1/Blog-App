// import React, { useState, useEffect } from "react";
// import Input from "../components/Input";
// import Container from "../components/Container";

// const EditForm = () => {
//   const [userDetail, setUserDetail] = useState({ 
//     firstName: "",
//     MiddleName: "",
//     LastName: "",
//   });

//   //   ==============gpt====================
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetail({
//       ...userDetail,
//       [name]: value,
//     });
//   };
//   const updateDetail = (e) => {
//     console.log("CLickerr");
//     e.preventDefault();
//     console.log(userDetail);
//     localStorage.setItem("user", JSON.stringify(userDetail));
//   };

// //   const userData = JSON.parse(localStorage.getItem("user.firstName"));
// //   console.log("user Data from localStorage", userData);

//   useEffect(() => {
//     const userData = localStorage.getItem("user");   
//     console.log('userData',userData)
//     if (userData) {
//       const userObject = JSON.parse(userData);
//       const firstName = console.log(userObject.firstName);;
//     //   console.log(firstName);
//     //   console.log("firstName",userData.firstName);
//     }
//   }, []);


//   return (
//     <div className=" d-flex justify-content-center mt-4">
//       <Container className="w-75 ">
//         <form onSubmit={updateDetail}>
//           <Input
//             label="FirstName :"
//             placeholder="FirstName"
//             type="text"
//             name="firstName"
//             value={userDetail.firstName}
//             onChange={handleChange}
//             isRequired
//           />
//           <Input
//             label="MiddleName :"
//             placeholder="MiddleName"
//             type="text"
//             value={userDetail.MiddleName}
//             name="MiddleName"            
//             onChange={handleChange}
//             isRequired
//           />
//           <Input
//             label="lastName :"
//             placeholder="LastName"
//             type="text"
//             name="LastName"
//             value={userDetail.LastName}
//             onChange={handleChange}
//             isRequired
//           />

//           {/* <Button>Submit</Button> */}

//           <button>Add User</button>
//           <button onClick={() => {}}>Cancel</button>
//           {/* <button>Cancle</button> */}
//         </form>
//       </Container>
//     </div>
//   );
// };

// export default EditForm;

// // Signup.js by gpt

// // import React, { useState } from "react";
// // import Input from "../components/Input";
// // import Button from "../components/Button";

// // const Signup = () => {
// //   const [userDetail, setUserDetail] = useState({
// //     firstName: "",
// //     middleName: "",
// //     lastName: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setUserDetail({
// //       ...userDetail,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle signup logic here, e.g., send data to a server or perform client-side validation
// //     console.log("Form submitted:", userDetail);
// //   };

// //   return (
// //     <div  className=" d-flex justify-content-center mt-4">
// //       <h1>Signup</h1>
// //       <form onSubmit={handleSubmit}>
// //         <Input
// //           label="First Name"
// //           type="text"
// //           name="firstName"
// //           value={userDetail.firstName}
// //           onChange={handleChange}
// //           required
// //         />
// //         <Input
// //           label="Last Name"
// //           type="text"
// //           name="lastName"
// //           value={userDetail.lastName}
// //           onChange={handleChange}
// //           required
// //         />
// //         <Input
// //           label="Email"
// //           type="email"
// //           name="email"
// //           value={userDetail.email}
// //           onChange={handleChange}
// //           required
// //         />

// //         <Button type="submit">Signup</Button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Signup;




import React, { useState } from 'react'
import Input from '../components/Input';

function AddUser() {

    const[addUser , setAddUser]= useState({
        firstName : 'Shadan',
        lastName : 'Khan'
    })

    const handleChange = (e)=>{
      // console.log("this is a  clog",e);
        let name = e.target.name;
        let value = e.target.value;
        setAddUser({
            ...addUser,
            [name] : value,
        })

    }

console.log(addUser);

const submitBtn = (e) => {
    e.preventDefault();
    console.log(e);
}

  return (
    <form onSubmit={submitBtn}>
      <h1> Add-User</h1>
      <Input type="text"  
        label='First Name :'
        placeholder='Enter First name'
        name='firstName'
        value={addUser.firstName}
        required
        onChange={handleChange}

      />
      <Input type="text"  
        label='Last Name :'
        placeholder='Enter last name'
        name='lastName'
        value={addUser.lastName}
        required
        onChange={handleChange}

      />
      <button type='submit'>Add User</button>
    </form>
  )
}

export default AddUser

