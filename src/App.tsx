import React from 'react';

import { Routes, Route } from 'react-router-dom';
import './App.module.scss';

import { AddAddress, Menu } from './pages';

const App = () => (
  <div>
    <Routes>
      <Route element={<Menu />} index path="/" />
      <Route element={<AddAddress />} path="/add-address" />
    </Routes>
  </div>
);

export default App;
