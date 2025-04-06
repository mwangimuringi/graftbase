type Activity = {
    id: number;
    type: string;
    user: string;
    time: string;
  };
  
  export async function getRecentActivity(): Promise<Activity[]> {
    return [
      { id: 1, type: "login", user: "Alice", time: "2025-03-30 10:00" },
      { id: 2, type: "post", user: "Bob", time: "2025-03-30 09:45" },
    ];
  }
  