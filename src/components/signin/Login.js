import React, { useState } from 'react';
import '../css/signincss/LogIn.css';
// const LogIn = ({ onLogIn }) => {
//   const [username, setUsername] = useState('');

//   const handleLogIn = () => {
//     onLogIn(username);
//   };

//   return (
//         <div>
//            <h2>LogIn</h2>
//             <input
//             type="text"
//             placeholder="Enter Your Name"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             />
//             <button onClick={handleLogIn}>LogIn</button>
//         </div>
//     );
// };

const LogIn = ({onLogIn}) =>{

    const[name,setName]= useState('');

    const updateName = () => {
        onLogIn(name);
    }
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



export default LogIn;