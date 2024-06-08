import React from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <h2>Form Submitted Successfully</h2>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Username: {formData.username}</li>
        <li>Email: {formData.email}</li>
        <li>Phone Number: {formData.phoneNo}</li>
        <li>Country: {formData.country}</li>
        <li>City: {formData.city}</li>
        <li>PAN Number: {formData.panNo}</li>
        <li>Aadhar Number: {formData.aadharNo}</li>
      </ul>
    </div>
  );
};

export default Success;
