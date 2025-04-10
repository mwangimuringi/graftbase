// app/dashboard/conversations/new/page.tsx
import { useState } from 'react';

export default function NewConversationPage() {
  const [conversationTitle, setConversationTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conversationTitle) {
      setError('Please enter a conversation title.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    // Logic for submitting the conversation (mocked for now)
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Conversation created successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold">Create New Conversation</h1>
      <p className="mt-4 text-gray-600">Start a new conversation by filling in the details below.</p>
      
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Conversation Title</label>
          <input
            type="text"
            id="title"
            value={conversationTitle}
            onChange={(e) => setConversationTitle(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter conversation title"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="mt-4 w-full p-2 bg-blue-600 text-white rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Conversation'}
        </button>
      </form>
    </div>
  );
}
