
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from '../components/modal';
import Button from '../components/Button';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1&per_page=5").then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Usuários</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium">{user.first_name} {user.last_name}</h3>
            <p className="text-gray-500">{user.email}</p>
            <Button onClick={() => handleEdit(user)} className="mt-2 w-full">Editar</Button>
          </div>
        ))}
      </div>
      {isModalOpen && selectedUser && (
        <Modal user={selectedUser} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Users;
