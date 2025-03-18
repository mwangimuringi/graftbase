// /components/dashboard/UserTable.tsx
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  users: User[];
  loading: boolean;
}

const UserTable: React.FC<UserTableProps> = ({ users, loading }) => {
  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500 py-4">Loading users...</p>
      ) : (
        <table className="min-w-full border border-gray-300" role="table">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2" scope="col">
                Name
              </th>
              <th className="border px-4 py-2" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
      )}
    </div>
  );
};

export default UserTable;
