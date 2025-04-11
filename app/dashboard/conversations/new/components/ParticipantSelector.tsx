// app/dashboard/conversations/new/components/ParticipantSelector.tsx
import { useState, useEffect } from "react";

const mockParticipants = [
  { id: 1, name: "Alice Kim" },
  { id: 2, name: "Brian Lee" },
  { id: 3, name: "Carlos Garcia" },
  { id: 4, name: "Dana White" },
];

interface Props {
  onChange: (selectedIds: number[]) => void;
}

export default function ParticipantSelector({ onChange }: Props) {
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const handleToggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filtered = mockParticipants.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <div className="mb-4">
      <h2 className="text-lg font-medium mb-2">Participants</h2>
      <input
        type="text"
        placeholder="Search participants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
      />
      <ul className="space-y-2 max-h-48 overflow-y-auto">
        {filtered.map((p) => (
          // Inside the `li` element
          <li
            key={p.id}
            className={`flex items-center p-2 rounded-md ${
              selected.includes(p.id) ? "bg-blue-50" : ""
            }`}
          >
            <input
              type="checkbox"
              id={`participant-${p.id}`}
              checked={selected.includes(p.id)}
              onChange={() => handleToggle(p.id)}
              className="mr-2"
            />
            <label htmlFor={`participant-${p.id}`}>{p.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
