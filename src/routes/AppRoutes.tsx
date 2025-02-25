// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
// import Users from '../pages/Users';
// import EditUser from '../pages/EditUser';

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/users/edit/:id" element={<EditUser />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';
import EditUser from '../pages/EditUser';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
    </Routes>
  );
};

export default AppRoutes;
