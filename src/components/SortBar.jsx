import React from 'react';

function SortBar({ sortBy, setSortBy }) {
  const sortOptions = [
    { value: 'health', label: 'Health' },
    { value: 'damage', label: 'Damage' },
    { value: 'armor', label: 'Armor' }
  ];

  return (
    <div className="sort-bar">
      <h3>Sort By:</h3>
      {sortOptions.map(option => (
        <button
          key={option.value}
          className={sortBy === option.value ? 'active' : ''}
          onClick={() => setSortBy(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SortBar;