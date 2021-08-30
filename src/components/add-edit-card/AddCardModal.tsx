import Button from "../Button";
import ModalController, { useModal } from "../modal/ModalController";
import AddCardForm, { Submit } from "./AddCardForm";

export default function AddCardModal(props: {
  deckId: string;
  button?: {
    size?: string;
    theme?: ButtonTheme;
  };
}) {
  const { showModal, setShowModal, handleModalClose } = useModal();

  return (
    <>
      <ModalController
        title="Add Card"
        show={showModal}
        submitAction={Submit}
        updateShowState={handleModalClose}
        submitButtonText="Add Card"
      >
        <AddCardForm deckId={props.deckId} />
      </ModalController>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        size={props.button?.size}
        theme={props.button?.theme}
      >
        + Add Card
      </Button>
    </>
  );
}
