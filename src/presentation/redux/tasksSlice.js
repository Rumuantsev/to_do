import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    setTasks: (state, action) => action.payload,
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state[taskIndex] = { ...state[taskIndex], ...updatedTask };
      }
    },
    reorderTasks: (state, action) => {
      const { sourceIndex, destinationIndex } = action.payload;
      const [movedTask] = state.splice(sourceIndex, 1);
      state.splice(destinationIndex, 0, movedTask);
    },
  },
});

export const { setTasks, addTask, deleteTask, editTask, reorderTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
