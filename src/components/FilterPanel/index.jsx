import React from 'react';
import { func } from 'prop-types';

export default function FilterPanel({ changeFilter }) {
  const btnArr = ['All', 'Active', 'Completed'];

  const filterHandler = (event) => {
    changeFilter(event.target.innerText);
  };

  return (
    <div>
      {btnArr.map((value) => (
        <button
          key={value}
          type="button"
          onClick={filterHandler}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

FilterPanel.propTypes = {
  changeFilter: func.isRequired,
};
