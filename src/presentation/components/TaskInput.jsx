import React, { useState } from 'react';

const TaskInput = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');

    const handleAddTask = () => {
        if (title && about) {
            const newTask = { title, about };
            if (typeof onTaskCreated === 'function') {
                onTaskCreated(newTask);
            }
            setTitle('');
            setAbout('');
        } else {
            alert('Поля не должны быть пустыми.');
        }
    };

    return (
        <div className="input_form">
            <div className="text_forms">
                <input
                    type="text"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="About..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                />
            </div>
            <div className="create_button">
                <button onClick={handleAddTask}>
                    <img className="delete_img" src="/src/presentation/images/ic_create.svg" alt="create" />
                </button>
            </div>
        </div>
    );
};

export default TaskInput;
