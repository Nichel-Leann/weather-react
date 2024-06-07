import React from "react";

export default function Header() {
  return (
    <div className="header">
      <header>
        <form className="search-form">
          <input
            className="search-form-input"
            type="search"
            placeholder="Enter a city..."
            required
            minlength="3"
          />
          <input className="search-form-button" type="submit" value="Search" />
        </form>
      </header>
    </div>
  );
}
