import { Fragment, useContext, useEffect, useState } from "react";
import Input from "./Input";
import Modal, { THEME } from "./Modal";

import { DeckContext, DECK_ACTIONS } from "../contexts/DeckContext";

export default function AddDeck(props: {
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
    // update local deck state
    const updatedNewDeckData = { ...newDeckState };
    switch (event.target.id) {
      case "deck-name":
        updatedNewDeckData.name = event.target.value;
        setNewDeckState(updatedNewDeckData);
        break;
      case "description":
        updatedNewDeckData.description = event.target.value;
        setNewDeckState(updatedNewDeckData);
        break;
    }
  };

  // deck context
  const { deckContextDispatch } = useContext(DeckContext);

  const submitAction = () => {
    console.log("submitting adding new deck");
    deckContextDispatch({
      type: DECK_ACTIONS.NEW_DECK,
      deckBones: newDeckState,
    });
  };

  const [newDeckState, setNewDeckState] = useState({
    name: "",
    description: "",
  });

  return (
    <Modal
      open={modalOpen}
      handleClose={handleModalClose}
      title="Add Deck"
      content={
        <Fragment>
          <Input
            id="deck-name"
            label="Deck Name"
            placeholder=""
            inputOnChange={onInputChange}
            value={newDeckState.name}
          />
          <Input
            id="description"
            label="Description"
            placeholder=""
            inputOnChange={onInputChange}
            value={newDeckState.description}
          />
        </Fragment>
      }
      submit={{ label: "Add Deck", theme: THEME.SUCCESS, action: submitAction }}
      cancel={null}
    />
  );
}

export const AddDeckKit = () => {
  const [showAddDeck, setShowAddDeck] = useState(false);

  return { showAddDeck, setShowAddDeck };
};
