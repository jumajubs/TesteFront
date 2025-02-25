
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import Input from '../components/Input';
import Button from '../components/Button';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/users');
    } catch (error) {
      alert('Login falhou');
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Simplificamos juntos</h1>
        <p>Supply Chain | Industrial | Systems</p>
      </div>
      <div className="right-section">
        <div className="login-box">
          <div className="logo-container">
            <div className="logo">LOGO</div>
          </div>
          <h2>LOGIN</h2>
          <Input type="email" name="email" placeholder="Usuário" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
          <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
          <Button onClick={handleLogin} className="login-button">LOGAR</Button>
          <div className="links">
            <a href="#">ESQUECI MINHA SENHA</a>
            <a href="#">CADASTRE-SE</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;