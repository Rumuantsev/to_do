import React, { useEffect, useState } from 'react';
import taskManager from "../../domain/TaskManager";
import Task from "./Task";
import TaskInput from "./TaskInput";

const TodoList = () => {
    const noTasks = document.querySelector('.no_tasks');
    const [tasks, setTasks] = useState(taskManager.getTasks());

    useEffect(() => {    
        if(tasks.length === 0){
            noTasks.style.display = 'flex';
        }
    }, [tasks]);

    const onTaskCreated = (task) => {
        if(taskManager.getTasks().length === 0){
            noTasks.style.display = 'none';
        }
        const newTask = taskManager.addTask(task);
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="todo_container">
            <TaskInput onTaskCreated={onTaskCreated} />
            {tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    about={task.about}
                    id={task.id}
                />
            ))}
        </div>
    );
};

export default TodoList;
