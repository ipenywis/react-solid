import React, { useState } from "react";

export function EditUserProfileBAD() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Basic validation
    if (name === "name") {
      setErrors({
        ...errors,
        name: value.trim() === "" ? "Name is required" : "",
      });
    } else if (name === "email") {
      setErrors({
        ...errors,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address",
      });
    } else if (name === "password") {
      setErrors({
        ...errors,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value)
          ? ""
          : "Password must meet the criteria",
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform API POST request here with formData
    // Replace this with your actual API endpoint and payload
    console.log("Sending data to the API:", formData);
  };

  return (
    <div className="flex flex-col max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Edit User Profile</h1>
      <form
        className="flex flex-col items-start"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col mb-4">
          <label className="font-bold text-left">
            Profile Picture:
          </label>
          {formData.image && (
            <div className="mt-2 mb-2">
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Profile Preview"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            className="text-xs"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-left font-bold">Name:</label>
          <input
            className="rounded-sm h-8 p-4"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="text-red-500">{errors.name}</div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-left font-bold">Email:</label>
          <input
            className="rounded-sm h-8 p-4"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="text-red-500">{errors.email}</div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-left font-bold">Password:</label>
          <input
            className="rounded-sm h-8 p-4"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className="text-red-500">{errors.password}</div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
