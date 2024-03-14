import React, { useState } from "react";
import Input from "../components/Input";
import axios from "../axios/axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const hobbiesList = [
    " Cricket",
    " Hockey",
    " Football",
    " Reading",
    " Drawing",
    " Other",
  ];
  const navigate = useNavigate();
  const [addUser, setAddUser] = useState({
    // id: Date.now(),
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    hobbies: [],
  });
  const [message, setMessage] = useState("FORM MASSAGE");

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // If the field is 'hobbies', update the array based on checkbox selection
    if (name === "hobbies") {
      const selectedHobbies = addUser.hobbies.includes(value)
        ? addUser.hobbies.filter((hobby) => hobby !== value)
        : [...addUser.hobbies, value];

      setAddUser({
        ...addUser,
        [name]: selectedHobbies,
      });
    } else {
      setAddUser({
        ...addUser,
        [name]: value,
      });
    }
  };

  const submitBtn = async (e) => {
    e.preventDefault();

    // console.log("Show details", addUser);
    try {
      const response = await axios.post("/add-user", addUser);
      // console.log("User Added successful", response);
      if (response) {
        alert("User Added Successfully");
        navigate("/");
      }
    } catch (error) {
      // console.error(" failed", error);
      if (error.response.status === 409) {
        setMessage(error.response.data.msg);
      } else {
        // Handle other errors
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <>
      <form onSubmit={submitBtn}>
        <h1>Add User</h1>
        <Input
          type="text"
          label="First Name:"
          placeholder="Enter First name"
          name="firstName"
          value={addUser.firstName}
          required
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Middle Name:"
          placeholder="Enter Middle name"
          name="middleName"
          value={addUser.middleName}
          required
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Last Name:"
          placeholder="Enter last name"
          name="lastName"
          value={addUser.lastName}
          required
          onChange={handleChange}
        />
        <Input
          type="email"
          label="Email:"
          placeholder="Enter e-Mail"
          name="email"
          value={addUser.email}
          required
          onChange={handleChange}
        />
        <div>
          <label>
            Gender:
            <div className="text-end">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  required
                  checked={addUser.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={addUser.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={addUser.gender === "Other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </label>
        </div>
        <Input
          type="number"
          label="Age:"
          placeholder="Enter age"
          name="age"
          value={addUser.age}
          required
          onChange={handleChange}
        />
        <label>
          Hobbies:
          {hobbiesList.map((hobby) => (
            <label key={hobby}>
              <input
                type="checkbox"
                name="hobbies"
                value={hobby}
                checked={addUser.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              {hobby}
            </label>
          ))}
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
}

export default AddUser;
