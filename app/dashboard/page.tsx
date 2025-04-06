export default function DashboardPage() {
    return (
      <main className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">Card 1</div>
          <div className="bg-white p-4 rounded-xl shadow">Card 2</div>
          <div className="bg-white p-4 rounded-xl shadow">Card 3</div>
        </div>
      </main>
    );
  }
  