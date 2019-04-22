import React, { Component } from 'react';
import Product from './components/Product';
import todosData from './components/ToDosData';
import TodoItem from './components/TodoItem';

const App = () => {
  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div>
        {todoItems}
    </div>
  )
}
 
export default App;
