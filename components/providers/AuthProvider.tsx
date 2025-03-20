import { User } from "next-auth";
import { ReactNode, useState } from "react";

// /components/providers/AuthProvider.tsx
interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
  }

  useEffect(() => {
    const restoreSession = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/auth/session");
        const data = await response.json();
        if (response.ok) {
          setUser(data.user);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    restoreSession();
  }, []);  
  
  export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    const login = async (email: string, password: string) => {
      setLoading(true);
      try {
        const response = await fetch("/api/auth/login", { ... });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Login failed");
        setUser(data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <AuthContextProvider value={{ user, login, logout, loading }}>
        {children}
      </AuthContextProvider>
    );
  };

function useEffect(arg0: () => void, arg1: never[]) {
    throw new Error("Function not implemented.");
}
  