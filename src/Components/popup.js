import React from 'react';
import Modal from 'react-modal';
import './css/style.css'
import { FaUser } from "react-icons/fa";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function Popup() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="btn signup active  w3-animate-zoom" onClick={openModal}><FaUser />Signup</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Signup</h2>
        <button className="close btn" onClick={closeModal}>X</button>
        <p>Create a new account</p>
        <form className="w3-animate-zoom">
          <input type="text" Placeholder="Full Name" className="ip" required/>
          <input type="Email" Placeholder="Email" className="ip" required/>
          <input type="Password" Placeholder="Set Password" className="ip" required/>
          <button type="submit" className="btn btn-primary">Save and Close</button>

        </form>
      </Modal>
    </div>
  );
}
