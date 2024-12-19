import React, { FormEvent } from "react";
import "./SearchBar.css";
import toast, { Toaster } from "react-hot-toast";

interface ISearchBarProps {
  onQuerySet: (query: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onQuerySet }) => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).elements.namedItem(
      "query"
    ) as HTMLInputElement;
    const trimmedQuery = query.value.trim();
    if (trimmedQuery === "") {
      toast.error("Please enter text to search for images.", {
        duration: 3000,
      });
      return;
    }
    onQuerySet(trimmedQuery);
  };

  return (
    <>
      <Toaster />
      <header className="header">
        <form className="search-form" onSubmit={handleFormSubmit}>
          <button type="submit" className="search-btn">
            🔍
          </button>
          <input
            className="search-input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;
