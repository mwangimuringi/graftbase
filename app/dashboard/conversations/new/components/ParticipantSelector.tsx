// app/dashboard/conversations/new/components/ParticipantSelector.tsx
import { useState, useEffect } from 'react';

const mockParticipants = [
  { id: 1, name: 'Alice Kim' },
  { id: 2, name: 'Brian Lee' },
  { id: 3, name: 'Carlos Garcia' },
];

interface Props {
  onChange: (selectedIds: number[]) => void;
}

export default function ParticipantSelector({ onChange }: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <div className="mb-4">
      <h2 className="text-lg font-medium mb-2">Participants</h2>
      <ul className="space-y-2">
        {mockParticipants.map((p) => (
          <li key={p.id} className="flex items-center">
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
