import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login-page';
import Dashboard from './pages/dashboard';
import UserPage from './pages/user-page';
import DetailsPage from './pages/details-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/user-page' element={<UserPage />} />
      <Route path='/details/:id' element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
