import { Fragment, useContext, useEffect, useState } from "react";
import Input from "./Input";
import Modal, { THEME } from "./Modal";

import { DeckContext, DECK_ACTIONS } from "../contexts/DeckContext";

export default function AddCard(props: {
  deckId: string;
  show: boolean;
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

  const handleModalClose = () => {
    setModal(false);
    props.updateShowState(false);
  };

  // input handeling
  const onInputChange = (event: any) => {
    // update state based
    const updatedNewCardData = { ...newCardState };
    switch (event.target.id) {
      case "front-line1":
        updatedNewCardData.front[0] = event.target.value;
        setNewCardState(updatedNewCardData);
        break;
      case "front-line2":
        updatedNewCardData.front[1] = event.target.value;
        setNewCardState(updatedNewCardData);
        break;
      case "back-line1":
        updatedNewCardData.back[0] = event.target.value;
        setNewCardState(updatedNewCardData);
        break;
      case "back-line2":
        updatedNewCardData.back[1] = event.target.value;
        setNewCardState(updatedNewCardData);
        break;
    }
  };

  // deck context
  const { deckContextDispatch } = useContext(DeckContext);

  const submitAction = () => {
    deckContextDispatch({
      type: DECK_ACTIONS.NEW_CARD,
      deckId: props.deckId,
      cardBones: newCardState,
    });
    setTimeout(() => {
      setNewCardState({
        front: ["", ""],
        back: ["", ""],
      });
    }, 250);
  };

  const [newCardState, setNewCardState] = useState({
    front: ["", ""],
    back: ["", ""],
  });

  return (
    <Modal
      open={modalOpen}
      handleClose={handleModalClose}
      title="Add Card"
      content={
        <Fragment>
          <p>Card Front</p>
          <Input
            id="front-line1"
            placeholder="Line 1"
            inputOnChange={onInputChange}
            value={newCardState.front[0]}
          />
          <Input
            id="front-line2"
            placeholder="Line 2"
            inputOnChange={onInputChange}
            value={newCardState.front[1]}
          />
          <p>Card Back</p>
          <Input
            id="back-line1"
            placeholder="Line 1"
            inputOnChange={onInputChange}
            value={newCardState.back[0]}
          />
          <Input
            id="back-line2"
            placeholder="Line 2"
            inputOnChange={onInputChange}
            value={newCardState.back[1]}
          />
        </Fragment>
      }
      submit={{ label: "Add Card", theme: THEME.SUCCESS, action: submitAction }}
      cancel={null}
    />
  );
}

export const AddCardKit = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  return { showAddCard, setShowAddCard };
};
