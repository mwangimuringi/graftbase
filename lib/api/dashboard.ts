const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("authToken");
  if (!token) throw new Error("Not authenticated");
  return { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
};

const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}/dashboard/${endpoint}`, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to fetch ${endpoint}: ${errorMessage}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};

export const getDashboardStats = () => fetchData("stats");

export const getRecentActivities = () => fetchData("recent-activities");

export const getTopUsers = () => fetchData("top-users");
