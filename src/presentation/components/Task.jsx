import React, { useState } from 'react';
import taskManager from "../../domain/TaskManager";

const Task = ({ title, about, id }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Ограничиваем `title` и `about` до 40 символов, если `isExpanded` равно `false`
    const displayedTitle = isExpanded ? title : `${title.slice(0, 40)}${title.length > 40 ? '...' : ''}`;
    const displayedAbout = isExpanded ? about : `${about.slice(0, 40)}${about.length > 40 ? '...' : ''}`;

    const handleInfo = () => {
        setIsExpanded(!isExpanded);
    };

    const handleDelete = () => {
        const deleteModal = document.getElementById('deleteModal');
        const confirmDelete = document.getElementById('yesButton');
        const cancelDelete = document.getElementById('noButton');

        deleteModal.style.display = 'flex';

        confirmDelete.onclick = () => {
            taskManager.deleteTask(id);
            document.getElementById(id).remove();
            deleteModal.style.display = 'none';
            if (taskManager.getTasks().length === 0) {
                const noTasks = document.querySelector('.no_tasks');
                noTasks.style.display = 'flex';
            }
        };

        cancelDelete.onclick = () => {
            deleteModal.style.display = 'none';
        };
    };

    const handleEdit = () => {
        const editModal = document.getElementById('editModal');
        const editTask = taskManager.getTask(id);
        document.getElementById('editTitle').value = editTask.title;
        document.getElementById('editDescription').value = editTask.about;

        const saveButton = document.getElementById('save_button');
        saveButton.onclick = saveTask;

        const cancelButton = document.getElementById('cancel_button');
        cancelButton.onclick = () => {
            editModal.style.display = 'none';
        };

        editModal.style.display = 'flex';
    };

    const saveTask = () => {
        const updatedTitle = document.getElementById('editTitle').value;
        const updatedDescription = document.getElementById('editDescription').value;
        if (updatedTitle && updatedDescription) {
            taskManager.editTask(id, { title: updatedTitle, about: updatedDescription });
            document.getElementById(`task-title-${id}`).innerText = updatedTitle;
            document.getElementById(`task-about-${id}`).innerText = updatedDescription;
            document.getElementById('editModal').style.display = 'none';
        } else {
            alert('Поля не должны быть пустыми.');
        }
    };

    const handleShare = () => {
        const shareModal = document.getElementById('shareModal');
        shareModal.style.display = 'flex';

        const shareText = `${title}\n\n${about}`;
        const shareButtons = ['copyButton', 'vkButton', 'telegramButton', 'whatsappButton', 'facebookButton'];
        shareButtons.forEach(buttonId => {
            const button = document.getElementById(buttonId);
            button.onclick = () => {
                navigator.clipboard.writeText(shareText);
                shareModal.style.display = 'none';
            };
        });
    };

    return (
        <div className="task_container" id={id}>
            <div className="task_content">
                <div className="task_text">
                    <h3 id={`task-title-${id}`} style={{ whiteSpace: 'pre-wrap' }}>{displayedTitle}</h3>
                    <p id={`task-about-${id}`} style={{ whiteSpace: 'pre-wrap' }}>{displayedAbout}</p>
                </div>
                <div className="task_button">
                    <button onClick={handleDelete}>
                        <img className="delete_img" src="/src/presentation/images/ic_delete.svg" alt="delete" />
                    </button>
                </div>
            </div>
            <div className="task_options">
                <div className="task_options_buttons">
                    <button onClick={handleShare}>
                        <img className="share_img" src="/src/presentation/images/ic_share.svg" alt="share" />
                    </button>
                    <button onClick={handleInfo}>
                        <img className="info_img" src="/src/presentation/images/ic_info.svg" alt="info" />
                    </button>
                    <button onClick={handleEdit}>
                        <img className="edit_img" src="/src/presentation/images/ic_edit.svg" alt="edit" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task;
