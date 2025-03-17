import React from "react";

const SignupForm: React.FC = () => {
  return (
    <form className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 w-full rounded mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full rounded mb-2"
      />
      <button className="bg-blue-500 text-white p-2 w-full rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
