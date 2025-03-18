// /components/dashboard/UserTable.tsx
import React, { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [sortField, setSortField] = useState<"name" | "email">("name");
  const [sortedUsers, setSortedUsers] = useState([...users]);

  const handleSort = (field: "name" | "email") => {
    const sorted = [...users].sort((a, b) => a[field].localeCompare(b[field]));
    setSortField(field);
    setSortedUsers(sorted);
  };

  return (
    <table className="min-w-full border border-gray-300" role="table">
      <thead>
        <tr className="bg-gray-100">
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => handleSort("name")}
          >
            Name {sortField === "name" && "⬆"}
          </th>
          <th
            className="border px-4 py-2 cursor-pointer"
            onClick={() => handleSort("email")}
          >
            Email {sortField === "email" && "⬆"}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, index) => (
          <tr
            key={user.id}
            className={index % 2 === 0 ? "bg-gray-50" : ""}
            role="row"
          >
            <td className="border px-4 py-2 hover:bg-gray-200" role="cell">
              {user.name}
            </td>
            <td className="border px-4 py-2 hover:bg-gray-200" role="cell">
              {user.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
