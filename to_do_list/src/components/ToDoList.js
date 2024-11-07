import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, deleteTask, toggleComplete }) => {
    return (
        <ul>
            {tasks.map(task => (
                <ToDoItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
