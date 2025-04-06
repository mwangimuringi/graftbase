import DashboardCard from "./cards";

export default function DashboardPage() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title="Users" value="1,234" />
        <DashboardCard title="Revenue" value="$12,345" />
        <DashboardCard title="Sessions" value="5,678" />
      </div>
    </main>
  );
}
