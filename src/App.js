import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Task from './Components/Task'


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [fillter, setFilter] = useState('all');

  const addTask = () => {
    setTasks([...tasks, {id : Date.now(), text : newTask, completedOrNot : false}]);
    setNewTask('');
  }

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id ? {...task, completedOrNot : !task.completedOrNot} : task
    )))
  }

  const fillterTasks = tasks.filter((task) => {
    if (fillter === 'completed' ) {
      return task.completedOrNot;
    }
    else if (fillter === 'active') {
      return !task.completedOrNot;
    }
    return true;

  })
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div className="add-task">
        <input 
        className = "input"
        type='text'
        placeholder='Type here'
        value={newTask}
        onChange={handleInputChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>

     <div className='tasks-list'>
      {fillterTasks.map((task) => (
        <Task
        key = {task.id}
        task = {task}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        />
      ))
      
      }
      </div> 
    </div>
  );
}

export default App;
