
import React, { useState } from "react";
import { useTheme } from "../darkmode/ThemeProvider";
import Container from "../components/Container";

function DashBoard() {
  const { theme } = useTheme();

  // State to track whether a row is in edit mode
  const [editMode, setEditMode] = useState(null);

  // State to store user details
  const [userDetails, setUserDetails] = useState([
    {
      id: 1,
      firstName: "First Name",
      middleName: "Middle name",
      lastName: "last Name",
      email: "email@example.com",
      age: "25",
      gender: "Other",
      hobbies: "Coding",
    },
    // Add more user details as needed
  ]);

  // State to store values of the new user being added
  const [newUser, setNewUser] = useState({
    firstName: "q",
    middleName: "w",
    lastName: "e",
    email: "r",
    age: "t",
    gender: "y",
    hobbies: "u",            
  });

  
  const handleEdit = (index) => {
    setEditMode(index);
  };

  
  const handleUpdate = (index) => {
    // Add logic to update values (e.g., API call)
    setEditMode(null);
  };

  // Function to handle deleting a user
  const handleDelete = (index) => {
    // Add logic to delete user (e.g., API call)
    const updatedUserDetails = [...userDetails];
    updatedUserDetails.splice(index, 1);
    setUserDetails(updatedUserDetails);
  };

  // Function to handle adding a new user
  const handleAddUser = () => {
    // Add logic to add new user (e.g., API call)
    const updatedUserDetails = [
      ...userDetails,
      { id: userDetails.length + 1, ...newUser },
    ];
    setUserDetails(updatedUserDetails);

    // Reset the new user values
    setNewUser({
      firstName: "New",
    middleName: "User",
    lastName: "Default",
    email: "newuser@example.com",
    age: "25",
    gender: "Other",
    hobbies: "Coding",
    });
    
  // console.log(updatedUserDetails);
  };

  return (
    <Container>
      <div>
        <h1 className="text-center mt-2">User Details</h1>
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <table
        className={`table table-striped ${
          theme === "dark" ? "table-dark" : ""
        }`}
      >
        <thead className="thead-dark">
          <tr>
          <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((user, index) => (
            <tr key={user.id}>
              <td>
                {user.id}
              </td>
              <td>
                {editMode === index ? (
                  <input
                    value={user.firstName}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "firstName", e.target.value)
                      )
                    }
                    required
                  />
                ) : (
                  user.firstName
                )}
              </td>
              <td>
                {editMode === index ? (
                  <input
                    value={user.middleName}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "middleName", e.target.value)
                      )
                    }
                  />
                ) : (
                  user.middleName
                )}
              </td>
              <td>
                {editMode === index ? (
                  <input
                    value={user.lastName}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "lastName", e.target.value)
                      )
                    }
                  />
                ) : (
                  user.lastName
                )}
              </td>
              <td>
                {/* {editMode === index ? (
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "email", e.target.value)
                      )
                    }  
                    
                  />
                ) :} */}
                { 
                  user.email
                }
              </td>
              <td>
                {editMode === index ? (
                  <input
                    type="number"
                    value={user.age}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "age", e.target.value)
                      )
                    }
                  />
                ) : (
                  user.age
                )}
              </td>
              <td>
                {editMode === index ? (
                  <input
                    value={user.gender}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "gender", e.target.value)
                      )
                    }
                  />
                ) : (
                  user.gender
                )}
              </td>
              <td>
                {editMode === index ? (
                  <input
                    value={user.hobbies}
                    onChange={(e) =>
                      setUserDetails((prev) =>
                        updateField(prev, index, "hobbies", e.target.value)
                      )
                    }
                  />
                ) : (
                  user.hobbies
                )}
              </td>
              <td>
                {editMode === index ? (
                  <>
                    <button onClick={() => handleUpdate(index)}>Update</button>
                    <button onClick={() => setEditMode(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

// Helper function to update a specific field in the user details array
const updateField = (prev, index, field, value) => {
  const updatedDetails = [...prev];
  updatedDetails[index] = { ...updatedDetails[index], [field]: value };
  return updatedDetails;
};

export default DashBoard;
