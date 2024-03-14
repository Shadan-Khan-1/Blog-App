import React, { useState, useEffect } from "react";
import EditUserbyId from "../example/EditUserbyId";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useTheme } from "../darkmode/ThemeProvider";
// import MyModal from "../example/MyModal";

export default function Table() {
  const { theme } = useTheme();

  const [userList, setUserList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    const existingData = localStorage.getItem("userDetails");
    const existData = existingData ? JSON.parse(existingData) : [];

    setUserList(existData);
  }, []);

  // Delete Button
  const handleDelete = (userId) => {
    const updatedUserList = userList.filter((user) => user.id !== userId);

    setUserList(updatedUserList);

    localStorage.setItem("userDetails", JSON.stringify(updatedUserList));

    handleClose();
  };

  // Edit Button
  const handleEdit = (userId) => {
    const userToEdit = userList.find((user) => user.id === userId);
    setEditMode(true);
    setEditedUser(userToEdit);
  };

  const handleUpdate = () => {
    // Update the user details in the list
    const updatedUserList = userList.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );

    setUserList(updatedUserList);
    localStorage.setItem("userDetails", JSON.stringify(updatedUserList));
  };

  // modal content
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <h1>All User Details</h1>
      <button>
        <Link to="/add-user" >
        Add User
        </Link>
      </button>
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
            <tr key={user.id}>
              <th scope="row">{i + 1}</th>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.middleName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.age}</td>
              <td>{user.hobbies}</td>
              <td>
                {editMode && editedUser.id === user.id ? (
                  <>
                    {/* <Button className="m-1" onClick={handleUpdate}>
                      Update
                    </Button> */}
                    <Button className="m-1" onClick={() => setEditMode(false)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="m-1" onClick={() => handleEdit(user.id)}>
                      Edit
                    </Button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleShow}
                    >
                      Delete
                    </button>

                    <div
                      className={`modal ${showModal ? "show" : ""}`}
                      tabIndex="-1"
                      role="dialog"
                      style={{ display: showModal ? "block" : "none" }}
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Delete Content</h5>
                            <button
                              type="button"
                              className="close"
                              onClick={handleClose}
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">Are you sure Delete this user Contents</div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={handleClose}
                            >
                              Close
                            </button>
                            <Button
                              className="m-1 btn-danger"
                              onClick={() => handleDelete(user.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <Button 
                    className="m-1 btn-danger"
                    onClick={() => handleDelete(user.id)}>
                      Delete
                    </Button> */}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button>Hello</button> */}

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

      {/* My Modal components */}
    </>
  );
}
