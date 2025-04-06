type Stats = {
    users: number;
    revenue: string;
    sessions: number;
  };
  
  export async function getStats(): Promise<Stats> {
    const stats: Stats = await new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          users: 1234,
          revenue: "$12,345",
          sessions: 5678,
        });
      }, 300)
    );
  
    return stats;
  }
  