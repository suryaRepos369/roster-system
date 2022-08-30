import React from "react";
import { Modal } from "react-responsive-modal";
import { Button } from "../sp-button/Button";
import { Oval } from "react-loader-spinner";

export const confirmAlert = (open, content, handleOk, handleCancel) => {
  return (
    <Modal classNames="bg-transparent" showCloseIcon={false} open={open}>
      <div className="py-3">{content}</div>
      <div className="d-flex">
        <Button
          className="rounded w-50 text-nowrap"
          title="Submit"
          variant="primary"
          onClick={() => handleOk()}
        />
        <Button
          className="rounded w-50 text-nowrap ms-3"
          title="Cancel"
          variant="grey2"
          onClick={() => handleCancel()}
        />
      </div>
    </Modal>
  );
};
const modalStyle = {
  modal: {
    background: "transparent",
    boxShadow: "none",
  },

  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const ModalLoader = ({ open, content }) => {
  return (
    <div className="loader-background">
      <Modal
        styles={modalStyle}
        classNames="bg-transparent"
        showCloseIcon={false}
        open={open}
      >
        <div className="d-flex justify-content-center flex-column align-items-center">
          <Oval
            color="#EC2227"
            secondaryColor="white"
            ariaLabel="loading"
            height={40}
            width={40}
          />
        <div className=" text-white h5 py-3">{content}</div>
        </div>
      </Modal>
    </div>
  );
};
