// app/dashboard/conversations/new/components/ConversationForm.tsx

'use client';

import { useState, useRef } from 'react';
import ParticipantSelector from './ParticipantSelector';

export default function ConversationForm() {
  const [participants, setParticipants] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current?.value || '';
    const description = descriptionRef.current?.value || '';

    if (!title || participants.length === 0) {
      alert('Title and at least one participant are required.');
      return;
    }

    setLoading(true);
    try {
      // Simulate async API call
      await new Promise((res) => setTimeout(res, 1000));

      console.log('Conversation created:', { title, description, participants });

      // Reset form
      if (titleRef.current) titleRef.current.value = '';
      if (descriptionRef.current) descriptionRef.current.value = '';
      setParticipants([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1 className="text-xl font-semibold">New Conversation</h1>

      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          ref={titleRef}
          placeholder="Enter a title"
          required
          className="mt-1 w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description (optional)
        </label>
        <textarea
          id="description"
          name="description"
          ref={descriptionRef}
          rows={3}
          placeholder="What is this conversation about?"
          className="mt-1 w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <ParticipantSelector onChange={setParticipants} disabled={loading} />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Conversation'}
        </button>
      </div>
    </form>
  );
}
