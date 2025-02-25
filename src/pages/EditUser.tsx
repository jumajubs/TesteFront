import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../services/userService';
import Input from '../components/Input';
import Button from '../components/Button';

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({ first_name: '', email: '' });

  useEffect(() => {
    getUserById(Number(id)).then(data => setUser(data.data));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await updateUser(Number(id), user);
    navigate('/users');
  };

  return (
    <div className="edit-user">
      <h1>Editar Usuário</h1>
      <Input type="text" name="first_name" value={user.first_name} onChange={handleChange} />
      <Input type="email" name="email" value={user.email} onChange={handleChange} />
      <Button onClick={handleSubmit}>Salvar</Button>
    </div>
  );
};

export default EditUser;