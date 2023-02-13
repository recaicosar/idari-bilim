import React from "react";

export const SearchBox = () => {
  return (
    <div className="search-box">
      <form>
        <input type="search" placeholder="ara.." />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
      <i className="fas fa-times close-search" />
    </div>
  );
};
