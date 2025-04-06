export type Stats = {
  users: number;
  revenue: string;
  sessions: number;
};

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchMockStats(): Promise<Stats> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        users: randomInt(1000, 1500),
        revenue: `$${randomInt(10000, 15000)}`,
        sessions: randomInt(5000, 8000),
      });
    }, 300)
  );
}

export async function getStats(
  source: "mock" | "live" = "mock"
): Promise<Stats> {
  if (source === "mock") return fetchMockStats();

  // Placeholder for real backend logic
  return {
    users: 0,
    revenue: "$0",
    sessions: 0,
  };
}
