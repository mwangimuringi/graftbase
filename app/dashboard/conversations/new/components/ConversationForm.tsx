// Add state
const [loading, setLoading] = useState(false);

// Update handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const title = (form.title as HTMLInputElement).value;
  const description = (form.description as HTMLTextAreaElement).value;

  if (!title || participants.length === 0) {
    alert('Title and at least one participant are required.');
    return;
  }

  setLoading(true);
  try {
    // Simulate async call
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Form submitted:', { title, description, participants });
  } finally {
    setLoading(false);
  }
};

// Update button
<button
  type="submit"
  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
  disabled={loading}
>
  {loading ? 'Creating...' : 'Create Conversation'}
</button>
