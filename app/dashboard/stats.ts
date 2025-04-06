type Stats = {
    users: number;
    revenue: string;
    sessions: number;
  };
  
  async function fetchMockStats(): Promise<Stats> {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          users: 1234,
          revenue: "$12,345",
          sessions: 5678,
        });
      }, 300)
    );
  }
  
  export async function getStats(source: "mock" | "live" = "mock"): Promise<Stats> {
    if (source === "mock") return fetchMockStats();
  
    // Placeholder for real backend logic
    return {
      users: 0,
      revenue: "$0",
      sessions: 0,
    };
  }
  