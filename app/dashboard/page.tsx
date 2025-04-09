// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Start a new Conversation</div>
        <div className="bg-white p-4 shadow rounded">Upload a File</div>
        <div className="bg-white p-4 shadow rounded">Invite Team Members</div>
      </div>
    </section>
  );
}
