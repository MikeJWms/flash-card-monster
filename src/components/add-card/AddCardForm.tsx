import { useContext, useState } from "react";
import Input from "../Input";

import { DeckContext, DECK_ACTIONS } from "../../contexts/DeckContext";

export default function AddCard(props: { deckId: string }) {
  // local state
  const [newCardState, setNewCardState] = useState({
    front: ["", ""],
    back: ["", ""],
  });

  // input handeling - update local state
  const onInputChange = (event: any) => {
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
  };

  return (
    <form id="add-card" name="add-card" onSubmit={submitAction}>
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
    </form>
  );
}

// call this function to commit the form to global state
const Submit = () => {
  const form = document.getElementById("add-card") as HTMLFormElement;
  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
};

export { Submit };
