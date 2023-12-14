import './Modal.css';

function Modal({ show, onClose }) {

    if (!show) {
        return null;
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Employee Created Successfully</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;