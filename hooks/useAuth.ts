import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const expiry = localStorage.getItem("expiry");

    if (storedUser && expiry && Date.now() < Number(expiry)) {
      setUser(JSON.parse(storedUser));
    } else {
      logout();
    }
  }, []);

  const login = (userData: object, sessionDuration = 3600000) => {
    // Default: 1 hour
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("expiry", (Date.now() + sessionDuration).toString());
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("expiry");
  };

  return { user, login, logout };
};

export default useAuth;
