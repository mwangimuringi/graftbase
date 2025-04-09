// app/dashboard/page.tsx
import { MessageCircle, UploadCloud, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <span>Start a new Conversation</span>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center space-x-2">
          <UploadCloud className="w-5 h-5 text-green-500" />
          <span>Upload a File</span>
        </div>
        <div className="bg-white p-4 shadow rounded flex items-center space-x-2">
          <Users className="w-5 h-5 text-purple-500" />
          <span>Invite Team Members</span>
        </div>
      </div>
    </section>
  );
}
