import Button from "../Button";
import ModalController, { ModalKit } from "../modal/ModalController";
import AddCardForm, { Submit } from "./AddCardForm";

export default function AddCardModal(props: {
  deckId: string;
  button?: {
    size?: string;
    theme?: ButtonTheme;
  };
}) {
  const { showModal, setShowModal } = ModalKit();

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ModalController
        title="Add Card"
        show={showModal}
        submitAction={Submit}
        updateShowState={handleModalClose}
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
