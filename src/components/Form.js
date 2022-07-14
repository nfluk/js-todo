import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [todo, setNewTodo] = useState('');

  const submitter = (e) => {
    e.preventDefault();

    dispatch(addTodo({ todo, done: false }));
    setNewTodo('');
  };

  return (
    <form className="form" onSubmit={submitter}>
      <div className="form__block">
        <input
          type="text"
          id="txtTodoItemToAdd"
          placeholder="Type Your ToDo here"
          value={todo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <input type="submit" value="Save ToDo" id="btnAddTodo" />
      </div>
    </form>
  );
};

export default Form;
