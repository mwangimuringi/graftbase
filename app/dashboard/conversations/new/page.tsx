// app/dashboard/conversations/new/page.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function NewConversationPage() {
  const [conversationTitle, setConversationTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conversationTitle) {
      setError("Please enter a conversation title.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    // Logic for submitting the conversation (mocked for now)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess("Conversation created successfully!");
    }, 1000);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold">Create New Conversation</h1>
      <p className="mt-4 text-gray-600">
        Start a new conversation by filling in the details below.
      </p>

      {success && <p className="text-green-500 mt-4">{success}</p>}

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Conversation Title
          </label>
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
          className="mt-4 w-full p-2 bg-blue-600 text-white rounded-md flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="spinner-border animate-spin w-5 h-5 border-4 border-t-transparent border-blue-300 rounded-full"></div>
          ) : (
            "Create Conversation"
          )}
        </button>
      </form>

      <button
        onClick={() => router.push("/dashboard/conversations")}
        className="mt-6 w-full p-2 text-gray-600 border border-gray-300 rounded-md"
      >
        Back to Conversations
      </button>
    </div>
  );
}
