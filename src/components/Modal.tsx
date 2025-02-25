import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Modal = ({ user, onClose }: { user: any, onClose: () => void }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Usuário atualizado:', editedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4">Editar Usuário</h2>
        <Input type="text" name="first_name" value={editedUser.first_name} onChange={handleChange} />
        <Input type="text" name="last_name" value={editedUser.last_name} onChange={handleChange} />
        <Input type="email" name="email" value={editedUser.email} onChange={handleChange} />
        <div className="flex justify-between mt-4">
        <Button onClick={() => console.log('Usuário excluído')} className="bg-red-500 text-white">Excluir</Button>
        <Button onClick={onClose} className="bg-gray-400 text-white">Cancelar</Button>
        <Button onClick={handleSave} className="bg-blue-500 text-white">Salvar</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;