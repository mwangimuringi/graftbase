const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const logout = async () => {
    localStorage.removeItem("authToken");
  };
  
  export const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
  
      const data = await response.json();
      sessionStorage.setItem("authToken", data.token);
      localStorage.setItem("authToken", data.token);
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };
      localStorage.setItem("authToken", data.token);
      return data;
    } catch (error) {
      console.error("Login error:", error);
  };  

export const signup = async (email: string, password: string, name: string) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name }),
  });

  if (!response.ok) throw new Error("Signup failed");
  return response.json();
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No authentication token found");
  
    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) throw new Error("Failed to fetch user data");
    return response.json();
  };