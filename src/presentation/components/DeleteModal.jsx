import React from 'react';


function DeleteModal() {
    return (
        <div id="deleteModal" className="modal delete_modal">
            <div className="modal_content">
                <p>Delete this task?</p>
                <div className="modal_buttons">
                    <button id="yesButton">Yes</button>
                    <button id="noButton">No</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;