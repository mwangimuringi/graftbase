import React from "react";

const SearchBar: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border p-2 w-full rounded"
    />
  );
};

export default SearchBar;
