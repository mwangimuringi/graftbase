// app/dashboard/conversations/new/page.tsx
import { useState } from 'react';

export default function NewConversationPage() {
  const [conversationTitle, setConversationTitle] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConversationTitle(e.target.value);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold">Create New Conversation</h1>
      <p className="mt-4 text-gray-600">Start a new conversation by filling in the details below.</p>
      
      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Conversation Title</label>
          <input
            type="text"
            id="title"
            value={conversationTitle}
            onChange={handleTitleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter conversation title"
          />
        </div>
      </form>
    </div>
  );
}
