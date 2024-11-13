import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

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

    const updateTask = (id, newName) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, name: newName } : task
            )
        );
    };


    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'active') return !task.completed;
        return true;
    });


    const sortedTasks = [...filteredTasks].sort((a, b) => a.completed - b.completed);

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>
            <AddTaskForm addTask={addTask} />
            <ToDoList tasks={sortedTasks} deleteTask={deleteTask} toggleComplete={toggleComplete} updateTask={updateTask} />
        </div>
    );
};


export default App;
