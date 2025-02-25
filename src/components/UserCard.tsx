import React from 'react';
import Button from './Button';

type UserCardProps = {
  user: { id: number; first_name: string; email: string };
  onEdit: () => void;
  onDelete: () => void;
};

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.first_name}</h3>
      <p>{user.email}</p>
      <Button onClick={onEdit}>Editar</Button>
      <Button onClick={onDelete}>Excluir</Button>
    </div>
  );
};

export default UserCard;