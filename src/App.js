import React, { useState } from 'react';
import LogIn from './components/signin/LogIn';
import Welcome from './components/signin/Welcome';

const App = () => {
  const [name, setName] = useState('');

  return (
      <div>
          {name ? (
          <Welcome name={name} />
           ) : (
          <LogIn onLogIn={setName} />
      )}
      </div>
  );
};

export default App;
