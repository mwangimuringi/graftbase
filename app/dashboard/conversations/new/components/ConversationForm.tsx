// app/dashboard/conversations/new/components/ConversationForm.tsx

export default function ConversationForm() {
    return (
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

      </form>
    );
  }
  