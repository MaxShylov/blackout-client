import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { AddAddress } from './pages/AddAddress';

const App = () => (
  <div>
    <Routes>
      <Route element={<AddAddress />} path="/add-address" />
    </Routes>
  </div>
);

export default App;
