import React from 'react';

function TodoItem(props) {
  return (
    <div className="todoClass">
      <h4>{props.info.task}</h4>
      
      <input type='checkbox' checked={props.info.completed}/>
      <h5 ><em>priority: <span style={{color: props.info.importance == 'high' ? 'red' : 'grey'}}>{props.info.importance}</span></em></h5>
    </div>
  );
  
}

export default TodoItem;