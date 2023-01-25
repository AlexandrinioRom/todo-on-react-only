import React, { useState } from 'react';
import { func } from 'prop-types';

export default function CreatePanel({ create }) {
  const [text, setText] = useState('');

  const createTask = (event) => {
    if (event.code !== 'Enter' && event.type !== 'click') return;
    create({ id: Date.now(), value: text, completed: false });
    setText('');
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        value={text}
        onChange={changeHandler}
        onKeyDown={createTask}
      />
      <button
        type="button"
        onClick={createTask}
      >
        Create task
      </button>
    </div>
  );
}

CreatePanel.propTypes = {
  create: func.isRequired,
};
