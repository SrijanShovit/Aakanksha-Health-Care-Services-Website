import React from 'react';
import Modal from 'react-modal';
import './css/style.css'

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

export default function Popup1() {
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
      <button className="btn btn-primary login" onClick={openModal}>Login</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
        <button className="close btn" onClick={closeModal}>X</button>
        <form>
          <input type="Email" Placeholder="Email" className="ip" required/>
          <input type="Password" Placeholder="Password" className="ip" required/>
          <button type="submit" className="btn btn-primary">Save and Close</button>

        </form>
      </Modal>
    </div>
  );
}
