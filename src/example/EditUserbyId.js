import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "../axios/axios";

const EditUserbyId = ({ editedUser, onUpdate, onCancel }) => {
  const hobbiesList = [
    " Cricket",
    " Hockey",
    " Football",
    " Reading",
    " Drawing",
    " Other",
  ];
  const [updateUser, setUpdateUser] = useState({
    firstName: editedUser.firstName,
    middleName: editedUser.middleName,
    lastName: editedUser.lastName,
    email: editedUser.email,
    age: editedUser.age,
    gender: editedUser.gender,
    hobbies: editedUser.hobbies,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "hobbies") {
      const selectedHobbies = updateUser.hobbies.includes(value)
        ? updateUser.hobbies.filter((hobby) => hobby !== value)
        : [...updateUser.hobbies, value];

      setUpdateUser({
        ...updateUser,
        [name]: selectedHobbies,
      });
    } else {
      setUpdateUser({
        ...updateUser,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make axios PUT request
      // console.log(editedUser._id);
      const res = await axios.put(`/update-user/${editedUser._id}`, updateUser);

      const updatedUser = res.data;

      onUpdate(updatedUser);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">Edit User </h1>
        <h2 className="text-center">User ID :-'{editedUser._id}'</h2>
        <Input
          type="text"
          label="First Name:"
          placeholder="Enter First name"
          name="firstName"
          value={updateUser.firstName}
          required
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Middle Name:"
          placeholder="Enter Middle name"
          name="middleName"
          value={updateUser.middleName}
          required
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Last Name:"
          placeholder="Enter last name"
          name="lastName"
          value={updateUser.lastName}
          required
          onChange={handleChange}
        />
        <Input
          type="email"
          label="Email:"
          placeholder="Enter e-Mail"
          name="email"
          value={updateUser.email}
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
                  checked={updateUser.gender === "Male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={updateUser.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={updateUser.gender === "Other"}
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
          value={updateUser.age}
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
                checked={updateUser.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              {hobby}
            </label>
          ))}
        </label>
        <br />
        <Button type="submit">Update</Button>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default EditUserbyId;
