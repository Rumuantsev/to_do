class LocalTaskStorage{

    constructor(){
        this.storageKey = "tasks";
    }

    getTasks() {
        const tasksJson = localStorage.getItem(this.storageKey);
        return tasksJson ? JSON.parse(tasksJson) : [];
    }


    getTask(taskId) {
        const tasks = this.getTasks(); // Получаем список всех задач
        return tasks.find(task => task.id === taskId); // Ищем задачу по ID и возвращаем её
    }

    addTask(task){
        const tasks = this.getTasks();
        task.id = Date.now(); // Простой способ генерации уникального ID
        tasks.push(task);
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return task;
    }

    deleteTask(taskId) {
        const tasks = this.getTasks();
        const updatedTasks = tasks.filter(task => task.id !== taskId);
 
        localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
  
        return taskId;
    }

    editTask(taskId, updatedTask) {
        const tasks = this.getTasks();
        
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                // Копируем все поля вручную и обновляем только нужные
                return {
                    id: task.id, // сохраняем id
                    title: updatedTask.title, // обновляем title
                    about: updatedTask.about  // обновляем about
                    // если есть другие поля, добавляем их по аналогии
                };
            }
            return task; // если задача не та, что нужно, возвращаем её без изменений
        });
    
        localStorage.setItem(this.storageKey, JSON.stringify(updatedTasks));
        return updatedTask;
    }
}

const storage = new LocalTaskStorage();

export default storage;