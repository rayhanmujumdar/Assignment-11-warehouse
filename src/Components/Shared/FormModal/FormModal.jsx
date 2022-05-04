import React from "react";
import Modal from "react-modal";
const FormModal = ({ handleEmail, user, closeModal, modalIsOpen,readonly,text}) => {
  const customStyles = {
    content: {
        background: '#540909',
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#FF4B2B";
  }
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2
          className="text-center my-2"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          {text}
        </h2>

        <form onSubmit={handleEmail}>
          <input
          name="email"
            type="email"
            className="border w-72 outline-none px-3 py-1 border-gray-400"
            defaultValue={user?.email}
            readOnly={readonly || false}
            required
            placeholder="Enter your email"
          />
          <br />
          <div className="flex justify-between">
            <button
              className="my-4 bg-red-600 text-white px-4 py-2 rounded-sm"
              onClick={closeModal}
            >
              close
            </button>
            <button
              type="submit"
              className="my-4 bg-[#2C5364] text-white px-4 py-2 rounded-sm"
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FormModal;
