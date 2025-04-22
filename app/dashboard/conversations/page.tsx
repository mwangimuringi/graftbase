// app/dashboard/conversations/page.tsx
import Link from "next/link";
import { useState, useEffect } from "react";

const mockConversations = [
  {
    id: 1,
    title: "Project Updates",
    lastMessage: "Meeting tomorrow at 3 PM",
    lastMessageTime: "2025-04-05",
  },
  {
    id: 2,
    title: "Marketing Strategy",
    lastMessage: "Need input on the new campaign",
    lastMessageTime: "2025-04-02",
  },
];

export default function ConversationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // Simulating data loading
  }, []);

  const filteredConversations = mockConversations.filter((conversation) =>
    conversation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Conversations</h1>
        <p>Loading...</p>
      </section>lllllllllllllllllllllllllllllll 987yt
    );
  }

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Conversations</h1>
      <input
        type="text"
        placeholder="Search conversations..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      />
      <ul className="bg-white divide-y rounded shadow">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => (
            <li key={conversation.id} className="p-4">
              <Link
                href={`/dashboard/conversations/${conversation.id}`}
                passHref
              >
                <h3 className="font-semibold text-blue-600 hover:underline">
                  {conversation.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500">
                {conversation.lastMessage}
              </p>
              <span className="text-xs text-gray-400">
                Last message: {conversation.lastMessageTime}
              </span>
            </li>
          ))
        ) : (
          <li className="p-4 text-center text-gray-500">
            No conversations found.
          </li>
        )}

        <li className="p-4 text-center text-gray-500">
          <Link href="/dashboard/conversations/new" passHref>
            <a className="text-blue-600 hover:underline">
              Create a new conversation
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
