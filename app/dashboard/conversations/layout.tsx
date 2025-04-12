// app/dashboard/conversations/layout.tsx
export default function ConversationsLayout({
  children,
  title = "Conversations",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-grow">
        <aside className="w-64 bg-gray-800 text-white p-4 hover:bg-gray-700">
          <div className="mb-6">
            <img
              src="/profile.jpg"
              alt="User"
              className="w-12 h-12 rounded-full mb-2"
            />
            <h3 className="text-sm font-semibold">John Doe</h3>
            <p className="text-xs text-gray-400">User</p>
          </div>
          <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
          <ul>
            <li>
              <a
                href="/dashboard/conversations"
                className="block py-2 text-sm hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Conversations
                <span className="ml-2 text-xs text-gray-400"></span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/conversations/new"
                className="block py-2 text-sm hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              >
                Great Conversation
              </a>
            </li>
          </ul>
        </aside>
        <div className="flex-grow">
          <header className="bg-blue-600 text-white p-4">
            <h1 className="text-xl font-semibold">{title}</h1>
          </header>
          <main className="p-4">{children}</main>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 graftbase.com</p>
      </footer>
    </div>
  );
}
