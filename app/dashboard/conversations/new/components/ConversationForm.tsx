// app/dashboard/conversations/new/components/ConversationForm.tsx
import { useState } from 'react';
import ParticipantSelector from './ParticipantSelector';

export default function ConversationForm() {
  const [participants, setParticipants] = useState<number[]>([]);

  return (
    <form className="space-y-4">
      <h1 className="text-xl font-semibold">New Conversation</h1>

      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter a title"
          required
        />
      </div>
      <div>
  <label htmlFor="description" className="block text-sm font-medium">
    Description (optional)
  </label>
  <textarea
    id="description"
    name="description"
    rows={3}
    className="mt-1 w-full border border-gray-300 rounded-md p-2"
    placeholder="What is this conversation about?"
  />
</div>
      <ParticipantSelector onChange={setParticipants} />
    </form>
  );
}
