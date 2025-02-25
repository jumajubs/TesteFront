import { createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      if (response.status === 200) {
        setIsAuthenticated(true);
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};