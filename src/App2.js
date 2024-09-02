import React, { useState } from 'react';
import Registration from '../src/components/registration/Registration';
import Display from '../src/components/registration/Display';
import Welcome from '../src/components/registration/Welcome';
import '../src/components/css/registration/Registration.css';
function App2() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <div>
          <Welcome username={user.name} />
          <Display user={user} />
        </div>
      ) : (
        <Registration setUser={setUser} />
      )}
    </div>
  );
}

export default App2;