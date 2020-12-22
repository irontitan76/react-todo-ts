import React, { useState } from 'react';
// import { Route } from 'react-router-dom';

import TodoList from 'components/TodoList';
import NewTodo from 'components/NewTodo';
import { Todo } from './models/Todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prevTodos) => ([
      ...prevTodos,
      { id: Math.random().toString(), text }
    ]));
  };

  const handleRemoveTodo = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAdd={handleAddTodo} />
      <TodoList onDelete={handleRemoveTodo} items={todos} />
    </div>
  );
};

export default App;
