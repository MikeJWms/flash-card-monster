import { FormEvent, useContext, useEffect, useState } from "react";
import Input from "../Input";

import { DeckContext, DECK_ACTIONS } from "../../contexts/DeckContext";

export default function EditDeckForm(props: { deckId: string }) {
  // deck context
  const { deckState, deckContextDispatch } = useContext(DeckContext);

  // local state
  const [newDeckState, setNewDeckState] = useState({
    name: "",
    description: "",
  });

  // on first render, get deck info and load into state
  useEffect(() => {
    const { name, description } = deckState.find(
      (deck: Deck) => deck.id == props.deckId
    );
    setNewDeckState({ name, description });
  }, []);

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

  const submitAction = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("submitting adding new deck");
    deckContextDispatch({
      type: DECK_ACTIONS.EDIT_DECK,
      deckBones: newDeckState,
      deckId: props.deckId,
    });
    return false;
  };

  return (
    <form id="edit-deck" name="edit-deck" onSubmit={submitAction}>
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
  const form = document.getElementById("edit-deck") as HTMLFormElement;
  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
};

export { Submit };
