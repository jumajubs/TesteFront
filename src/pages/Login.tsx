
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import Input from '../components/Input';
import Button from '../components/Button';

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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <Input type="email" name="email" placeholder="Usuário" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" name="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin} className="w-full mt-4 bg-blue-500 text-white">Entrar</Button>
      </div>
    </div>
  );
};

export default Login;
