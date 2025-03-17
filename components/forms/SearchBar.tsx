import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 w-full rounded"
    />
  );
};

export default SearchBar;
