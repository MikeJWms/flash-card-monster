import Button from "../Button";
import ModalController, { useModal } from "../modal/ModalController";
import AddDeckForm, { Submit } from "./AddDeckForm";

export default function AddDeckModal(props: {
  button?: {
    size?: string;
    theme?: ButtonTheme;
  };
}) {
  const { showModal, setShowModal, handleModalClose } = useModal();

  return (
    <>
      <ModalController
        title="Add Deck"
        show={showModal}
        submitAction={Submit}
        updateShowState={handleModalClose}
        submitButtonText="Add Deck"
      >
        <AddDeckForm />
      </ModalController>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        size={props.button?.size}
        theme={props.button?.theme}
      >
        + Add Deck
      </Button>
    </>
  );
}
