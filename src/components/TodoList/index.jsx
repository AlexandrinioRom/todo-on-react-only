import React from 'react';
import { PropTypes } from 'prop-types';

import Task from '../Task';

export default function TodoList({ tasks, remove, complete, change }) {
  return (
    <div>
      {tasks.map(({ id, value, completed }) => (
        <Task
          key={id}
          remove={remove}
          change={change}
          complete={complete}
          status={{ id, value, completed }}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
  remove: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
};
