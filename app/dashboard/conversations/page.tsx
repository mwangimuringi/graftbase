// app/dashboard/conversations/page.tsx
const mockConversations = [
    { id: 1, title: "Project Updates", lastMessage: "Meeting tomorrow at 3 PM", lastMessageTime: "2025-04-05" },
    { id: 2, title: "Marketing Strategy", lastMessage: "Need input on the new campaign", lastMessageTime: "2025-04-02" },
  ];
  
  export default function ConversationsPage() {
    return (
      <section className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Conversations</h1>
        <ul className="bg-white divide-y rounded shadow">
          {mockConversations.map((conversation) => (
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
  