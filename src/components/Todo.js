import React from 'react';
import Image from './trash.png';
import { useDispatch } from 'react-redux';
import { deleteTodo, markDone } from '../features/todoSlice';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        todo.done
          ? 'todo--completed todo--toggle-completed'
          : 'todo--toggle-completed'
      } todo`}
      onClick={() => dispatch(markDone(todo.id))}
    >
      <h2>
        {todo.todo}
        <img
          className="todo__button--remove"
          src={Image}
          height="20px"
          width="20px"
          alt="trash can icon"
          onMouseDown={() => dispatch(deleteTodo(todo.id))}
        />
      </h2>
    </div>
  );
};

export default Todo;
