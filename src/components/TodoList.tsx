import React from 'react';
import './TodoList.css';

interface TodoListProps {
  items: { id: string, text: string }[];
  onDelete: Function,
}

const TodoList: React.FC<TodoListProps> = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(({ id, text  }) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={onDelete.bind(null, id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;