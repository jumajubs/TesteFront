import { useEffect, useState } from "react";
import axios from "axios";
import Modal from '../components/Modal';
import Button from '../components/Button';
import '../styles/Users.css';
import { FaSignOutAlt, FaBell, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  isAdmin?: boolean;
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    setLoggedInUser({ id: 1, first_name: "George", last_name: "Bluth", email: "george.bluth@reqres.in", isAdmin: true });
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1&per_page=5");
      const usersFromApi = response.data.data;
      const usersWithAdmin = usersFromApi.map((user: User) => {
        if (loggedInUser && user.id === loggedInUser.id) {
          return { ...user, isAdmin: loggedInUser.isAdmin };
        }
        return user;
      });
      setUsers(usersWithAdmin);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = async (user: User) => {
    if (loggedInUser?.isAdmin) {
      try {
        await axios.delete(`https://reqres.in/api/users/${user.id}`);
        setUsers(users.filter((u) => u.id !== user.id));
        setIsModalOpen(false);
        setSuccessMessage("Usuário excluído com sucesso!");
        setTimeout(() => setSuccessMessage(null), 4000);
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
    } else {
      alert("Você não tem permissão para excluir usuários.");
      setIsModalOpen(false);
    }
  };

  const handleSave = async (user: User) => {
    if (loggedInUser?.isAdmin) {
      try {
        await axios.put(`https://reqres.in/api/users/${user.id}`, user);
        setUsers(users.map((u) => (u.id === user.id ? user : u)));
        setIsModalOpen(false);
        setSuccessMessage("Usuário editado com sucesso!");
        setTimeout(() => setSuccessMessage(null), 4000);
      } catch (error) {
        console.error("Erro ao salvar usuário:", error);
      }
    } else {
      alert("Você não tem permissão para salvar usuários.");
      setIsModalOpen(false);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleNotifications = () => {
    console.log("Notifications");
  };

  const handleAddUser = () => {
    console.log("Add User");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Usuários</h2>
        <div className="flex items-center">
          <Button onClick={handleAddUser} className="bg-green-500 mr-4">
            <FaPlus className="mr-2" />
            Novo
          </Button>
          <FaBell className="text-2xl mr-4 cursor-pointer" onClick={handleNotifications} />
          <FaSignOutAlt className="text-2xl cursor-pointer" onClick={handleLogout} />
        </div>
      </div>
      {successMessage && (
        <div className="flex justify-center mb-4"> 
          <div className="bg-green-200 text-green-800 p-3 rounded">
            {successMessage}
          </div>
        </div>
      )}
      <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Nome</th>
              <th className="p-2">Email</th>
              <th className="p-2 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="p-2">{user.first_name} {user.last_name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2 text-right">
                  {loggedInUser?.isAdmin && (
                    <Button onClick={() => handleEdit(user)} className="bg-blue-500">Editar</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedUser && (
        <Modal
          user={selectedUser}
          onClose={() => setIsModalOpen(false)}
          onDelete={handleDelete}
          onSave={handleSave}
          loggedInUser={loggedInUser}
        />
      )}
    </div>
  );
};

export default Users;