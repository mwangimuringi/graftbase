// app/dashboard/conversations/page.tsx
import { useState } from "react";

const mockConversations = [
  { id: 1, title: "Project Updates", lastMessage: "Meeting tomorrow at 3 PM", lastMessageTime: "2025-04-05" },
  { id: 2, title: "Marketing Strategy", lastMessage: "Need input on the new campaign", lastMessageTime: "2025-04-02" },
];

export default function ConversationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = mockConversations.filter((conversation) =>
    conversation.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredConversations.map((conversation) => (
          <li key={conversation.id} className="p-4">
            <h3 className="font-semibold">{conversation.title}</h3>
            <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
            <span className="text-xs text-gray-400">Last message: {conversation.lastMessageTime}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
