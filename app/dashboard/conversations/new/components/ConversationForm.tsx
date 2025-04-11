// app/dashboard/conversations/new/components/ConversationForm.tsx
import { useState } from "react";
import ParticipantSelector from "./ParticipantSelector";

// Update the component
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.title as HTMLInputElement).value;
    const description = (form.description as HTMLTextAreaElement).value;
  
    if (!title || participants.length === 0) {
      alert('Title and at least one participant are required.');
      return;
    }
  
    console.log('Form submitted:', { title, description, participants });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      ...
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Create Conversation
      </button>
    </form>
  );
  
