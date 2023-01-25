import React from 'react';
import { func, string } from 'prop-types';

export default function FilterPanel({ changeFilter, currentFilterType }) {
  const btnArr = ['All', 'Active', 'Completed'];

  const filterHandler = (event) => {
    changeFilter(event.target.id);
  };

  return (
    <div>
      {btnArr.map((value) => (
        <span key={`span-for-${value}`}>
          <input
            id={value}
            name="filter"
            type="radio"
            onClick={filterHandler}
            defaultChecked={currentFilterType === value}
          />
          <label htmlFor={value}>{value}</label>
        </span>
      ))}
    </div>
  );
}

FilterPanel.propTypes = {
  changeFilter: func.isRequired,
  currentFilterType: string.isRequired,
};
