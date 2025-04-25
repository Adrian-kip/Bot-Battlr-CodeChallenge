import React from 'react';

const botClasses = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ filters, setFilters }) {
  const toggleFilter = (botClass) => {
    if (filters.includes(botClass)) {
      setFilters(filters.filter(f => f !== botClass));
    } else {
      setFilters([...filters, botClass]);
    }
  };

  return (
    <div className="filter-bar">
      <h3>Filter By Class:</h3>
      {botClasses.map(botClass => (
        <label key={botClass}>
          <input
            type="checkbox"
            checked={filters.includes(botClass)}
            onChange={() => toggleFilter(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;