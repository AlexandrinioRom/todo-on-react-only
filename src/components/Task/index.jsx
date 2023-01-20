import React, { useState } from 'react';
import { PropTypes, func } from 'prop-types';

export default function Task({ status, remove, complete, change }) {
  const [changeMode, setChangeMode] = useState(false);

  const completeHandler = (event) => {
    complete(Number(event.target.parentNode.id));
  };

  const deleteHandler = (event) => {
    remove(Number(event.target.parentNode.id));
  };

  const changeHandler = (event) => {
    change(Number(event.target.parentNode.id), event.target.value);
  };

  const changeModeHandler = () => {
    setChangeMode(!changeMode);
  };

  return (
    <div id={status.id}>
      <input
        type="checkbox"
        defaultChecked={status.completed}
        onClick={completeHandler}
      />
      {changeMode ? (
        <input
          onChange={changeHandler}
          onBlur={changeModeHandler}
        />
      ) : (
        <span onDoubleClick={changeModeHandler}>{status.value}</span>
      )}
      <button
        type="button"
        onClick={deleteHandler}
      >
        delete
      </button>
    </div>
  );
}

Task.propTypes = {
  status: PropTypes.instanceOf(Object).isRequired,
  complete: func.isRequired,
  remove: func.isRequired,
  change: func.isRequired,
};
