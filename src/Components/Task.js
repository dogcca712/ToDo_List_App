import React from 'react';
import './Task.css';

function Task({task, deleteTask, toggleTask}) {
    return (
        <div className={task.completedOrNot ? 'completed' : ''}>        
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default Task;