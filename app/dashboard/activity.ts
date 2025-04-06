type Activity = {
    id: number;
    type: string;
    user: string;
    time: string;
  };
  
  async function fetchMockActivity(): Promise<Activity[]> {
    return [
      { id: 1, type: "login", user: "Alice", time: "2025-03-30 10:00" },
      { id: 2, type: "post", user: "Bob", time: "2025-03-30 09:45" },
    ];
  }
  
  export async function getRecentActivity(typeFilter?: string): Promise<Activity[]> {
    const all = await fetchMockActivity();
  
    const filtered = typeFilter ? all.filter((a) => a.type === typeFilter) : all;
  
    return filtered.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );
  }  
  