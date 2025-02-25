import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Usuários</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
