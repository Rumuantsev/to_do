import React, { useEffect, useState } from 'react';
import taskManager from "../../domain/TaskManager";
import Task from "./Task";
import TaskInput from "./TaskInput";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

    const handleOnDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return; 

        const reorderedTasks = Array.from(tasks);
        const [movedTask] = reorderedTasks.splice(source.index, 1);
        reorderedTasks.splice(destination.index, 0, movedTask);

        setTasks(reorderedTasks);
    };


    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
        <TaskInput onTaskCreated={onTaskCreated} />
        <Droppable droppableId="tasks">
            {(provided) => (
                <div
                    className="todo_container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <Task
                                        title={task.title}
                                        about={task.about}
                                        id={task.id}
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>
    );
};

export default TodoList;
