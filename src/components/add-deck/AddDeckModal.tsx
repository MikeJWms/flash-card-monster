/*
Goal:
  1. return a modal instance to add new deck
  2. return a button to show modal
*/

import Button from "../Button";
import ModalController, { ModalKit } from "../ModalController";
import AddDeckForm, {Submit} from "./AddDeckForm";

export default function AddDeckModal(props: {}) {
  const { showModal, setShowModal } = ModalKit();

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalController
        show={showModal}
        submitAction={Submit}
        updateShowState={handleModalClose}
      >
        <AddDeckForm />
      </ModalController>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Open Modal
      </Button>
    </>
  );
}
