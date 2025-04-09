// app/dashboard/page.tsx
import Link from "next/link";
import { MessageCircle, UploadCloud, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Link href="/dashboard/conversations">
          <div className="bg-white p-4 shadow rounded flex items-center space-x-2 hover:bg-blue-50 transition">
            <MessageCircle className="w-5 h-5 text-blue-500" />
            <span>Start a new Conversation</span>
          </div>
        </Link>
        <Link href="/dashboard/files">
          <div className="bg-white p-4 shadow rounded flex items-center space-x-2 hover:bg-green-50 transition">
            <UploadCloud className="w-5 h-5 text-green-500" />
            <span>Upload a File</span>
          </div>
        </Link>
        <Link href="/dashboard/team">
          <div className="bg-white p-4 shadow rounded flex items-center space-x-2 hover:bg-purple-50 transition">
            <Users className="w-5 h-5 text-purple-500" />
            <span>Invite Team Members</span>
          </div>
        </Link>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Uploaded "project-plan.pdf"</li>
          <li>Started a conversation on "Team Check-in"</li>
          <li>Invited alice@example.com to the workspace</li>
        </ul>
      </div>
    </section>
  );
}
