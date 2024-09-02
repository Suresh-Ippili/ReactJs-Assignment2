import React from 'react';

function Display({ user }) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Address: {user.address}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Department: {user.dept}</p>
    </div>
  );
}

export default Display;