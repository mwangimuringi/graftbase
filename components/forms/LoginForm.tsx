import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full rounded mb-2"
      />
      <button className="bg-blue-500 text-white p-2 w-full rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
