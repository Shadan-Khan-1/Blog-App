// MyModal.js
import React from "react";
// import { useTheme } from "styled-components";

const MyModal = ({
  showModal,
  handleClose,
  modalTitle,
  modalContent,
  handleShow,
  darkMode,
}) => {
    // const {theme} = useTheme();


  return (
    <div>
      <button
        type="button"
        className={`btn ${darkMode ? "btn-light" : "btn-primary"}`}
        onClick={handleShow}
      >
        Launch demo modal
      </button>

      {/* Modal */}
      <div
        className={`modal ${showModal ? "show" : ""} ${
          darkMode ? "dark-mode" : ""
        }`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div
          className={`modal-dialog modal-dialog-centered ${
            darkMode ? "dark-mode" : ""
          }`}
          role="document"
        >
          <div className={`modal-content ${darkMode ? "dark-mode" : ""}`}>
            <div className={`modal-header ${darkMode ? "bg-dark" : ""}`}>
              <h5 className={`modal-title ${darkMode ? "text-light" : ""}`}>
                {modalTitle}
              </h5>
              <button
                type="button"
                className={`close ${darkMode ? "text-light" : ""}`}
                onClick={handleClose}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className={`modal-body ${darkMode ? "bg-dark text-light" : ""}`}
            >
              {modalContent}
            </div>
            <div className={`modal-footer ${darkMode ? "bg-dark" : ""}`}>
              <button
                type="button"
                className={`btn ${darkMode ? "btn-light" : "btn-secondary"}`}
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className={`btn ${darkMode ? "btn-light" : "btn-primary"}`}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;




// // MyModal.js
// import React from 'react';

// const MyModal = ({ showModal, handleClose, modalTitle, modalContent, handleShow }) => {
//   return (
//     <div>
    //   <button type="button" className="btn btn-primary" onClick={handleShow}>
    //     Launch demo modal
    //   </button>

    //   {/* Modal */}
    //   <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
    //     <div className="modal-dialog modal-dialog-centered" role="document">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title">{modalTitle}</h5>
    //           <button type="button" className="close" onClick={handleClose} aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //         </div>
    //         <div className="modal-body">{modalContent}</div>
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-secondary" onClick={handleClose}>
    //             Close
    //           </button>
    //           <button type="button" className="btn btn-primary">
    //             Save changes
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// };

// export default MyModal;
