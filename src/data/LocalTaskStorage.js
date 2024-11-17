class LocalTaskStorage {
  constructor() {
    this.storageKey = "tasks";
  }

  getTasks() {
    const tasksJson = localStorage.getItem(this.storageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  getTask(taskId) {
    const tasks = this.getTasks();
    return tasks.find((task) => task.id === taskId);
  }

  addTask(task) {
    const tasks = this.getTasks();
    task.id = Date.now();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    return task;
  }

  deleteTask(taskId) {
    const tasks = this.getTasks();
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
    return taskId;
  }

  editTask(taskId, updatedTask) {
    const tasks = this.getTasks();
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          id: task.id,
          title: updatedTask.title,
          about: updatedTask.about,
        };
      }
      return task;
    });
    localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
    return updatedTask;
  }
}

const storage = new LocalTaskStorage();

export default storage;
