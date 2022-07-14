import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const pending = todos.filter((todo) => !todo.done);
  const done = todos.filter((todo) => todo.done);
  return (
    <main id="todoList">
      {pending.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {done.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </main>
  );
};

export default Todos;
