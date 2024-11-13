import React, { useState } from 'react';

const ToDoItem = ({ task, deleteTask, toggleComplete, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(task.name);

    const handleEditToggle = () => {
        if (isEditing) {
            updateTask(task.id, newName); 
        }
        setIsEditing(!isEditing); 
    };

    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none', marginBottom: '10px' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
            ) : (
                <span style={{ marginRight: '10px' }}>{task.name}</span>
            )}
            
            <button onClick={handleEditToggle} style={{ marginRight: '5px' }}>
                {isEditing ? 'Save' : 'Edit'}
            </button>

            <button onClick={() => toggleComplete(task.id)} style={{ marginRight: '5px' }}>
                {task.completed ? 'Unmark' : 'Complete'}
            </button>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default ToDoItem;

