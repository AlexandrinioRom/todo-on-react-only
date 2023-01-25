import React, { useState } from 'react';

import { CreatePanel, FilterPanel, TodoList } from './components';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [currentFilterType, setFilterType] = useState('All');

  const filter = (type) => {
    switch (type) {
      case 'Completed':
        return tasks.filter(({ completed }) => completed);
      case 'Active':
        return tasks.filter(({ completed }) => !completed);
      default:
        return tasks;
    }
  };

  const changeFilter = (type) => {
    setFilterType(type);
  };

  const create = (task) => {
    setTasks([...tasks, task]);
  };

  const remove = (taskId) => {
    setTasks(tasks.filter(({ id }) => id !== taskId));
  };

  const change = (taskId, newValue) => {
    setTasks(
      tasks.map((item) => {
        const task = item;
        if (task.id === taskId) {
          task.value = newValue;
        }
        return task;
      }),
    );
  };

  const complete = (taskId) => {
    setTasks(
      tasks.map((item) => {
        const task = item;
        if (task.id === taskId) {
          task.completed = !task.completed;
        }
        return task;
      }),
    );
  };

  return (
    <div className="wrapper">
      <div className="app">
        <CreatePanel create={create} />
        <FilterPanel
          changeFilter={changeFilter}
          currentFilterType={currentFilterType}
        />
        <TodoList
          tasks={filter(currentFilterType)}
          remove={remove}
          change={change}
          complete={complete}
        />
      </div>
    </div>
  );
}
