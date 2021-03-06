import { ReactElement, useEffect, useState } from "react";
import Modal, { THEME } from "./Modal";

// TODO: title, submitButtonText, and submitAction should be its own interface
//       called ModalContent. An additional attribute should be added called
//       'body', which is handled in series with children.

export default function ModalController(props: {
  show?: boolean;
  children?: ReactElement;
  title?: string;
  submitButtonText?: string;
  submitAction: () => void;
  updateShowState: (state: boolean) => void;
}) {
  // modal show / hide
  const [modalOpen, setModal] = useState(false);
  useEffect(() => {
    if (props.show) {
      setModal(true);
    } else {
      setModal(false);
    }
  }, [props.show]);

  // function closes modal
  const handleModalClose = () => {
    setModal(false);
    props.updateShowState(false);
  };

  return (
    <Modal
      open={modalOpen}
      handleClose={handleModalClose}
      title={props.title}
      content={props.children ? props.children : <></>}
      submit={{
        label: props.submitButtonText || "Submit",
        theme: THEME.SUCCESS,
        action: props.submitAction,
      }}
      cancel={null}
    />
  );
}

export function useModal(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
  };

  return [showModal, setShowModal];
}
