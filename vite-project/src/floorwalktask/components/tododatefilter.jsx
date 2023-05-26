import React, { useState } from 'react';

const TodoFilter = ({ onFilter }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleFilterClick = () => {
    if (selectedDate) {
      onFilter(selectedDate);
    }
  };

  return (
    <div>
      <label htmlFor="date">Filter by Date:</label>
      <input type="date" id="date" onChange={handleDateChange} />
      <button onClick={handleFilterClick}>Filter</button>
    </div>
  );
};

export default TodoFilter;
