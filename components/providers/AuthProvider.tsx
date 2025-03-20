// /components/providers/AuthProvider.tsx
interface AuthContextProps {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
  }
  
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
  