import React, {useState, useReducer} from 'react';
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import './App.css';

import {todoReducer, initialState} from './reducers/reducer'

function App() {
  const [formData, setFormData] = useState('')
  const [state, dispatch] = useReducer(todoReducer, initialState)


  const onHandleChanges = evt => {
    setFormData(evt.target.value)
  }

  const completedTodo = todo => {
    dispatch({type: 'TODO_TOGGLE', payload: todo})
  }

  return (
    <div className='App'>
      <h1>Welcome to Todos</h1>
      <div className="Todo">

      <TodoInput  
        onHandleChanges={onHandleChanges} 
        formData={formData} 
        setFormData ={setFormData} 
        dispatch={dispatch}/>

      <TodoList 
        completedTodo={completedTodo} 
        todos={state.todo}/> 

      </div>
    </div>
  );
}

export default App;
