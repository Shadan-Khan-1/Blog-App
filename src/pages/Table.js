import React, { useState, useEffect } from "react";
import EditUserbyId from "../example/EditUserbyId";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useTheme } from "../darkmode/ThemeProvider";
import axios from "../axios/axios";

export default function Table() {
  const { theme } = useTheme();

  const [userList, setUserList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  // get data from backend
  const getApiData = async () => {
    try {
      const res = await axios.get("/all-users");
      setUserList(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  // Delete Button
  const handleDelete = async (userId) => {
    // const updatedUserList = userList.filter((user) => user._id !== userId);

    // setUserList(updatedUserList);
    try {
      console.log("Delete user id", userId);
      const res = await axios.delete(`/delete/${userId}`);
      getApiData();
      alert("user delete successfully", res);
    } catch (error) {
      console.log(error);
    }
  };
  // Function to handle the updateUser
  const handleUpdate = (updatedUser) => {
    // Update the user list state
    setUserList((prevUserList) =>
      prevUserList.map((user) =>
        user._id === updatedUser._id ? updatedUser : user
      )
    );

    // Reset edit mode and edited user
    setEditMode(false);
    setEditedUser({});
    getApiData();
  };

  // Function to handle the edit button click
  const handleEdit = (userId) => {
    const userToEdit = userList.find((user) => user._id === userId);
    setEditMode(true);
    setEditedUser(userToEdit);
  };

  return (
    <>
      <h1>All User Details</h1>

      <Button className="nav-item mx-1">
        <Link className="nav-link" to="/add-user">
        Add User
        </Link>
      </Button>

      {/* <button>
        <Link to="/add-user">Add User</Link>
      </button> */}
      <table
        className={`table table-striped ${
          theme === "dark" ? "table-dark" : ""
        }`}
      >
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Middlename Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col"> Gender</th>
            <th scope="col"> Age</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={user._id}>
              <th scope="row">{i + 1}</th>
              <td>{user._id}</td>
              <td>{user.firstName}</td>
              <td>{user.middleName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.hobbies}</td>
              <td>
                {editMode && editedUser._id === user._id ? (
                  <>
                    <Button className="m-1" onClick={() => setEditMode(false)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="m-1"
                      onClick={() => handleEdit(user._id)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="m-1 btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editMode && (
        <div>
          <EditUserbyId
            editedUser={editedUser}
            onUpdate={handleUpdate}
            onCancel={() => setEditMode(false)}
          />
        </div>
      )}

      <br />
    </>
  );
}
