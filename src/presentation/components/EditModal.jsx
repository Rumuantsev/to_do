import React from 'react';


function EditModal() {
    return (
        <div id="editModal" className="modal edit_modal">
            <div className="edit_modal_content">
                <input type="text" id="editTitle" placeholder="Mini input" />
                <textarea id="editDescription" placeholder="Max input" defaultValue={""} />
                <div className="edit_modal_buttons">
                    <button id="cancel_button">Cancel</button>
                    <button id="save_button">Save</button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;