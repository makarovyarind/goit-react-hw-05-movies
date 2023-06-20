import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';

export function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');
  

  const handleChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      alert('Enter the name you are looking for');
      return;
    }
    
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchName}
          onChange={handleChange}
        />
        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
