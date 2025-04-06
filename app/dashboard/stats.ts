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
  
  export async function getStats(): Promise<Stats> {
    return await fetchMockStats();
  }
  