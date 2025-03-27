const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const updateUser = async (userId: string, userData: object) => {
  const token = sessionStorage.getItem("authToken");
  if (!token) throw new Error("Not authenticated");

  

  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });



  if (!response.ok) throw new Error("Failed to update user profile");
  return response.json();
};

export const getUsers = async (page: number = 1, limit: number = 10) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) throw new Error("Not authenticated");
  
    const response = await fetch(`${API_URL}/users?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) throw new Error("Failed to fetch users list");
    return response.json();
  };  

  const getAuthHeaders = () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) throw new Error("Not authenticated");
    return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
  };
  
  export const getUserById = async (userId: string) => {
    try {
      const response = await fetch(`${API_URL}/users/${userId}`, {
        method: "GET",
        headers: getAuthHeaders(),
      });
  
      if (!response.ok) throw new Error("Failed to fetch user details");
      return response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
  