import React from 'react';

export default function Todo(prop) {
  return (
    <li key={prop.todo.id}><h4>{prop.todo.title}</h4></li>
  );
}
