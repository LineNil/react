import React, { useState } from "react";
import { SearchButton, SearchForm } from "./Style";

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
    <SearchForm onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Find your product..."
      value={searchTerm}
      onChange={handleChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
}


export default Search;