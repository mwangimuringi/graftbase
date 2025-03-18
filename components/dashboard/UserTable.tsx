// /components/dashboard/UserTable.tsx
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
            <td className="border px-4 py-2 hover:bg-gray-200">{user.name}</td>
            <td className="border px-4 py-2 hover:bg-gray-200">{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
