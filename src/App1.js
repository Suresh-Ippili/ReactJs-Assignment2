
import { useState } from 'react';
import Welcome1 from './components/signinauth/Welcome1';
import LogIn1 from './components/signinauth/LogIn1';


const App1 = () => {
  const [name, setName] = useState('');

  const updateName = () =>{
    setName(name);
  }

  const handleLogout = () => {
    setName('');
  };
 
  return (
      <div>
          {name ? (
          <Welcome1 name={name} onLogout={handleLogout} />
           ) : (
          <LogIn1 onLogIn1={updateName} />
      )}
      </div>
  );
};

export default App1;