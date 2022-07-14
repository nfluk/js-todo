import { createSlice } from '@reduxjs/toolkit';

const saveToDosToLocalStorage = (todos) => {
  localStorage.setItem('myTodoList', JSON.stringify(todos));
};

const getToDosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('myTodoList') || '[]');
};

const initialState = {
  todos: getToDosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let id = Date.now();

      const newTodoTask = { id, ...action.payload };
      state.todos.push(newTodoTask);
      saveToDosToLocalStorage(state.todos);
    },

    markDone: (state, action) => {
      const toggleDone = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

      state.todos = [...toggleDone];
      saveToDosToLocalStorage(state.todos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToDosToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, markDone, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
