import { type User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextType {
  loading: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export const AuthContext = createContext<AuthContextType>({
  loading: true,
  isAuthenticated: false,
  user: null,
});
