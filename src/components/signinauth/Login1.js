import React, { useState } from 'react';
import '../css/signincss/LogIn.css';

const LogIn1 = ({onLogIn1}) =>{

    const[name,setName]= useState('');

    const updateName = () => {
        if (name.trim()) {
          onLogIn1(name);
        }
        console.log(updateName);
};
    return(
        <div>
            <h2>Log In</h2>
            <input type='text'
            placeholder='enter your name'
            value={name}
            onChange={ (e) =>{
                setName(e.target.value)
            }}
            />
            <button onClick={updateName}>LogIn</button>
        </div>
    )
}



export default LogIn1;