import React from 'react';

const ToDoItem = ({ task, deleteTask, toggleComplete }) => {
    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
            <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Unmark' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default ToDoItem;
