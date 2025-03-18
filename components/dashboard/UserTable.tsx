// /components/dashboard/UserTable.tsx
import React from "react";

const UserTable: React.FC = () => {
  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">John Doe</td>
          <td className="border px-4 py-2">john@example.com</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
