import React, { useState } from "react";

function EditModal({ isVisible, onSave, onCancel, task }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.about : "");

  if (!isVisible) return null;

  const handleSave = () => {
    onSave(title, description);
  };

  return (
    <div className="modal edit_modal">
      <div className="edit_modal_content">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div className="edit_modal_buttons">
          <button className="confirm_button" onClick={onCancel}>
            Cancel
          </button>
          <button className="cancel_button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
