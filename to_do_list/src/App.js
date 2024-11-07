import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName) => {
        const newTask = { id: Date.now(), name: taskName, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <AddTaskForm addTask={addTask} />
            <ToDoList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        </div>
    );
};

export default App;
