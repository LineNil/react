import React, { useState } from "react";

function Search({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState ("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return(
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}


export default Search;