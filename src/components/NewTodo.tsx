import React, { useState } from 'react';
import './NewTodo.css';

interface NewTodoProps {
  onAdd: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAdd }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTodo(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(todo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input
          id="todo-text"
          onChange={handleChange}
          type="text"
          value={todo}
        />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;