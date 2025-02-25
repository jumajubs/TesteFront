import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import '../styles/Modal.css';

const Modal = ({ user, onClose, onDelete, onSave, loggedInUser }: { user: any, onClose: () => void, onDelete: (user: any) => void, onSave: (user: any) => void, loggedInUser: any }) => {
    const [editedUser, setEditedUser] = useState(user);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };
  
    const handleDelete = () => {
      if (loggedInUser?.isAdmin) {
        onDelete(editedUser);
        onClose();
      } else {
        alert("Você não tem permissão para excluir usuários.");
        onClose();
      }
    };
  
    const handleSave = () => {
      if (loggedInUser?.isAdmin) {
        onSave(editedUser);
        onClose();
      } else {
        alert("Você não tem permissão para salvar usuários.");
        onClose();
      }
    };
  
    return (
<div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-semibold mb-4">Editar Usuário</h2>
    <div className="flex">
    
      <Input
        type="text"
        name="first_name"
        value={editedUser.first_name}
        onChange={handleChange}
        className="mb-4 mr-4 flex-1" 
      />
      <Input
        type="text"
        name="last_name"
        value={editedUser.last_name}
        onChange={handleChange}
        className="mb-4 ml-4 flex-1" 
      />
    </div>
    <Input
      type="email"
      name="email"
      value={editedUser.email}
      onChange={handleChange}
      className="mb-4"
    />
    <div className="flex justify-between mt-4">
      <Button className="bg-red-500" onClick={handleDelete}>
        Excluir
      </Button>
      <Button onClick={onClose} className="bg-gray-400">
        Cancelar
      </Button>
      <Button className="bg-blue-500" onClick={handleSave}>
        Salvar
      </Button>
    </div>
  </div>
</div>
      );
  };
  
  export default Modal;
