import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

export default function RForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  // const [showPassword, setShowPassword] = useState(false);
  const showPassword = false;

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone Number is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.panNo) newErrors.panNo = "PAN Number is required";
    if (!formData.aadharNo) newErrors.aadharNo = "Aadhar Number is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success", { state: formData });
    }
  };
  return (
    <div className={styles.container}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className={styles["error-message"]}>{errors.firstName}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className={styles["error-message"]}>{errors.lastName}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <span className={styles["error-message"]}>{errors.username}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className={styles["error-message"]}>{errors.email}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {/* <button
            type="button"
            className={styles["show-hide-button"]}
            onClick={() => setShowPassword(!showPassword)}
          ></button> */}
          {errors.password && (
            <span className={styles["error-message"]}>{errors.password}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && (
            <span className={styles["error-message"]}>{errors.phoneNo}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && (
            <span className={styles["error-message"]}>{errors.country}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>City:</label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
          </select>
          {errors.city && (
            <span className={styles["error-message"]}>{errors.city}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>PAN Number:</label>
          <input
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && (
            <span className={styles["error-message"]}>{errors.panNo}</span>
          )}
        </div>
        <div className={styles["form-group"]}>
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && (
            <span className={styles["error-message"]}>{errors.aadharNo}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={!Object.values(formData).every((x) => x)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
