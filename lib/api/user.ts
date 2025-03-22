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
