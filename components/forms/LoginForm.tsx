import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    console.log("Logging in with:", { username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Login</h2>
      {error && (
        <p className="text-red-500" role="alert">
          {error}
        </p>
      )}
      <label htmlFor="username" className="block font-medium">
        Username
      </label>
      <input
        id="username"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full rounded mb-2"
        aria-required="true"
      />
      <label htmlFor="password" className="block font-medium">
        Password
      </label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full rounded mb-2"
        aria-required="true"
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
