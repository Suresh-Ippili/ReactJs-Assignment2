import React, { useState } from 'react';
import Welcome from './Welcome';

const Login = () => {
  const [username, setUsername] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = () => {
    setShowWelcome(true);
  };

  return (
    <div>
      {!showWelcome ? (
        <div>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <Welcome username={username} />
      )}
    </div>
  );
};

export default Login;
