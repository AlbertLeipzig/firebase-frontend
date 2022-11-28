import { useState } from 'react';

import { Articles } from './views/Articles';
import { Login } from './views/Login';
import { Signup } from './views/Signup';
import { SuccesLogin } from './views/SuccesLogin';
import { SuccessLogout } from './views/SuccessLogout';
import { Routes, Route } from 'react-router-dom';

import { firebaseConfig } from './firebase-config';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/successlogin" element={<SuccesLogin />} />
        <Route path="/successlogout" element={<SuccessLogout />} />
      </Routes>
    </div>
  );
}

export default App;
