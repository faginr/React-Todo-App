import React from 'react';
import todoData from './TodoData';
import TodoItem from './TodoItem';

function App() {
  const TodoList = todoData.map(item => 
    <TodoItem key={item.id} info={item}/>)
  return (
    <div>
      {TodoList}
    </div>
  );
}

export default App;
