/*
Form used to add or edit a deck's name or description
example usage:
  import DeckForm, {Submit} from ...
  <DeckForm />
  <Button onClick={Submit}>+ Add Deck</Button>
*/
import { FormEvent, useContext, useEffect, useState } from "react";
import Input from "../Input";

import { DeckContext, DECK_ACTIONS } from "../../contexts/DeckContext";

export default function AddDeckForm(props: {
  deckId?: string;
  name?: string;
  description?: string;
}) {
  // deck context
  const { deckState, deckContextDispatch } = useContext(DeckContext);

  // local state
  const [newDeckState, setNewDeckState] = useState({
    name: props.name || "",
    description: props.description || "",
  });

  // on first render, get deck info and load into state
  useEffect(() => {
    if (props.deckId) {
      const { name, description } = deckState.find(
        (deck: Deck) => deck.id === props.deckId
      );
      setNewDeckState({ name, description });
    }
  }, [deckState, props.deckId]);

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
    if (props.deckId) {
      deckContextDispatch({
        type: DECK_ACTIONS.UPDATE_DECK,
        deckBones: newDeckState,
        deckId: props.deckId,
      });
    } else {
      deckContextDispatch({
        type: DECK_ACTIONS.NEW_DECK,
        deckBones: newDeckState,
      });
    }
    return false;
  };

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
