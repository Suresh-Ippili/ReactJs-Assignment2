
import React, { useState } from 'react';

function Registration({ setUser }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dept, setDept] = useState('');
  
    const handleRegister = () => {
      const newUser = { name, address, email, phoneNumber, dept };
      setUser(newUser);
    };
  
    return (
      <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <input type="text" placeholder="Department" value={dept} onChange={(e) => setDept(e.target.value)} />
        <button onClick={handleRegister}>Register</button>
      </div>
    );
  }
  
  export default Registration;
