const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const logout = async () => {
    localStorage.removeItem("authToken");
  };
  
  export const login = async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) throw new Error("Login failed");
    const data = await response.json();
    localStorage.setItem("authToken", data.token);
    return data;
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
