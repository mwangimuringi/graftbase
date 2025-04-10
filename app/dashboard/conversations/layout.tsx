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
            <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
            <ul>
              <li><a href="/dashboard/conversations" className="block py-2 text-sm hover:bg-blue-700">Conversations</a></li>
              <li><a href="/dashboard/conversations/new" className="block py-2 text-sm hover:bg-blue-700">New Conversation</a></li>
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
          <p>&copy; 2025 MyApp, All rights reserved</p>
        </footer>
      </div>
    );
  }
  