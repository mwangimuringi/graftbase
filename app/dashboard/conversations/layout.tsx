// app/dashboard/conversations/layout.tsx
export default function ConversationsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-semibold">Conversations</h1>
        </header>
        <main className="flex-grow p-4">{children}</main>
      </div>
    );
  }
  