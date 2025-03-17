import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 w-full rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
