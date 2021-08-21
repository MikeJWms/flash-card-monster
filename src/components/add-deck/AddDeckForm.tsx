/*
example usage:
  <AddDeckForm />
  <Button onClick={Submit}>+ Add Deck</Button>
*/
import { FormEvent, useContext, useState } from "react";
import Input from "../Input";

import { DeckContext, DECK_ACTIONS } from "../../contexts/DeckContext";

export default function AddDeckForm() {
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

  const submitAction = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("submitting adding new deck");
    deckContextDispatch({
      type: DECK_ACTIONS.NEW_DECK,
      deckBones: newDeckState,
    });
    return false;
  };

  const [newDeckState, setNewDeckState] = useState({
    name: "",
    description: "",
  });

  return (
    <form id="add-deck" name="add-deck" onSubmit={submitAction}>
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
    </form>
  );
}

const Submit = () => {
  const form = document.getElementById("add-deck") as HTMLFormElement;
  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
};

export { Submit };
