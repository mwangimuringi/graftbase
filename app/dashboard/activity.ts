// /app/dashboard/activity.ts
  
  export async function getRecentActivity() {
    return [
      { id: 1, type: "login", user: "Alice", time: "2025-03-30 10:00" },
      { id: 2, type: "post", user: "Bob", time: "2025-03-30 09:45" },
    ];
  }
  