import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../services/api"; // não está sendo usado enquanto mock
import { mockUser } from "../mocks/user";

interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string;
  role: string;
  cpf: string;
  address: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const navigate = useNavigate();

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  // useEffect(() => {
  //   if (token) {
  //     axios
  //       .get<User>("/api/Auth/me", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((res) => setUser(res.data))
  //       .catch(() => logout());
  //   }
  // }, [token, logout]);

  useEffect(() => {
    // Temporário: simulando login automático com usuário mockado
    setUser({
      id: mockUser.id,
      email: mockUser.email,
      fullName: mockUser.fullName, // fallback para compatibilidade
      avatarUrl: mockUser.avatarUrl,
      role: mockUser.role,
      cpf: mockUser.cpf,
      address: mockUser.address,
    });
    setToken("mock-token");
  }, []);

  const login = async () => {
    // email e password omitidos por enquanto, visto que o mock não os usa
    setToken("mock-token");
    setUser({
      id: mockUser.id,
      email: mockUser.email,
      fullName: mockUser.fullName,
      avatarUrl: mockUser.avatarUrl,
      role: mockUser.role,
      cpf: mockUser.cpf,
      address: mockUser.address,
    });
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
