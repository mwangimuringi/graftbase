export async function getStats() {
    // Simulate fetching from a database or API
    const stats = await new Promise((resolve) =>
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
  