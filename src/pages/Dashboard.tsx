import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <div className="dashboard-content">
          <h1>Bem-vindo ao Painel</h1>
          <p>Selecione uma opção no menu lateral.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;