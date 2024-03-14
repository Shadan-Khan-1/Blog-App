import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    id: Date.now(), // Using timestamp as a simple unique ID
    username: '',
    email: '',
    password: '',
  });

  // Event handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get existing data from local storage or initialize an empty array
    const existingDataString = localStorage.getItem('userRegistrations');
    const existingData = existingDataString ? JSON.parse(existingDataString) : [];

    // Check if the user with the same ID already exists
    const existingUserIndex = existingData.findIndex(user => user.id === formData.id);

    if (existingUserIndex !== -1) {
      // If user exists, update their information
      existingData[existingUserIndex] = formData;
    } else {
      // If user doesn't exist, add them to the array
      existingData.push(formData);
    }

    // Store the updated data back in local storage
    localStorage.setItem('userRegistrations', JSON.stringify(existingData));

    // Optionally, you can clear the form fields after submission
    setFormData({
      id: Date.now(),
      username: '',
      email: '',
      password: '',
    });

    // Display a success message or perform any other actions
    alert('User registered successfully!');
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
