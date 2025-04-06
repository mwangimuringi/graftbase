import DashboardCard from "./cards";
import { getStats } from "./stats";
import ActivityFeed from "./activity";

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <DashboardCard title="Users" value={stats.users} />
        <DashboardCard title="Revenue" value={stats.revenue} />
        <DashboardCard title="Sessions" value={stats.sessions} />
      </div>

      <section>
        <h2 className="text-xl font-medium text-gray-700 mb-4">
          Recent Activity
        </h2>
        <ActivityFeed />
      </section>
    </main>
  );
}
