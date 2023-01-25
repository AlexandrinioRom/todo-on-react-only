import { PropTypes, func } from 'prop-types';
import React, { useState } from 'react';

export default function Task({
  info,
  remove,
  change,
  complete,
}) {
  const [changeMode, setChangeMode] = useState(false);

  const inputRef = (node) => {
    if (node !== null) node.focus();
  };

  const completeHandler = (event) => {
    complete(Number(event.target.parentNode.id));
  };

  const deleteHandler = (event) => {
    remove(Number(event.target.parentNode.id));
  };

  const keyDownHandler = (event) => {
    if (event.code === 'Enter') {
      change(Number(event.target.parentNode.id), event.target.value);
      setChangeMode(!changeMode);
    }
    if (event.code === 'Escape') {
      setChangeMode(!changeMode);
    }
  };

  const changeModeHandler = () => {
    setChangeMode(!changeMode);
  };

  return (
    <div id={info.id}>
      <input
        type="checkbox"
        onClick={completeHandler}
        defaultChecked={info.completed}
      />
      {changeMode ? (
        <input
          ref={inputRef}
          onKeyDown={keyDownHandler}
          onBlur={changeModeHandler}
          defaultValue={info.value}
        />
      ) : (
        <span onDoubleClick={changeModeHandler}>{info.value}</span>
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
  info: PropTypes.instanceOf(Object).isRequired,
  complete: func.isRequired,
  remove: func.isRequired,
  change: func.isRequired,
};
