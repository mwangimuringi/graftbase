const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const getUserById = async (userId: string) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Failed to fetch user details");
  return response.json();
};
