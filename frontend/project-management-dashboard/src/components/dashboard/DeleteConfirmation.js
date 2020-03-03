import React, {useState} from 'react';

export const DeleteConfirmation = () => {
    const[hide] = useState(false)

    return (
        <div className="modal is-active">
            <div className="modal-background"/>
            <div className="modal-content">
                <span>Delete the current project?</span>
            </div>
            <button className="button is-danger">Cancel</button>
        </div>
    );
}