import React, { useEffect, useState } from "react";
import taskManager from "../../domain/TaskManager";
import Task from "./Task";
import TaskInput from "./TaskInput";
import NoTask from "./NoTask";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const [tasks, setTasks] = useState(taskManager.getTasks());

  const onTaskCreated = (task) => {
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

  const refreshTasks = () => {
    setTasks(taskManager.getTasks());
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <TaskInput onTaskCreated={onTaskCreated} />
      {tasks.length === 0 ? <NoTask /> : null}
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            className="todo_container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
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
                      refreshTasks={refreshTasks}
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
