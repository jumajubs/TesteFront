
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Users from '../pages/Users';
import EditUser from '../pages/EditUser';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
    </Routes>
  );
};

export default AppRoutes;
