import React, { Component } from 'react';

const TodoItem = props => {
    return (
    <div>
      <input type="checkbox" checked={props.item.completed}/>
      <p>{props.item.name}</p>
    </div>
    )
}

export default TodoItem;