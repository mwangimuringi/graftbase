const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const getDashboardStats = async () => {
  const token = sessionStorage.getItem("authToken");
  if (!token) throw new Error("Not authenticated");

  const response = await fetch(`${API_URL}/dashboard/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch dashboard statistics");
  return response.json();
};

export const getRecentActivities = async () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) throw new Error("Not authenticated");
  
    const response = await fetch(`${API_URL}/dashboard/recent-activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) throw new Error("Failed to fetch recent activities");
    return response.json();
  };
  