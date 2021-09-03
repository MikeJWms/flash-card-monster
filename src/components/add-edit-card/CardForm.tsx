import { useContext, useEffect, useState } from "react";

import { DeckContext, DECK_ACTIONS } from "../../contexts/DeckContext";

export default function AddCard(props: {
  deckId: string;
  cardId?: string;
  front?: string;
  back?: string;
}) {
  // deck context
  const { deckState, deckContextDispatch } = useContext(DeckContext);
  // local state
  const [newCardState, setNewCardState] = useState({
    front: props.front || "",
    back: props.back || "",
  });

  //if prop.cardId is != null, populate local state with context
  useEffect(() => {
    if (props.cardId) {
      //find deck
      const deck: Deck = deckState.find(
        (deck: Deck) => deck.id === props.deckId
      );
      const card = deck.cards.find((card: Card) => card.id === props.cardId);
      if (card)
        setNewCardState({
          front: card.front,
          back: card.back,
        });
    }
  }, [deckState, props.cardId, props.deckId]);

  // input handeling - update local state
  const onInputChange = (event: any) => {
    const updatedNewCardData = { ...newCardState };
    switch (event.target.id) {
      case "front":
        updatedNewCardData.front = event.target.value;
        setNewCardState(updatedNewCardData);
        break;
      case "back":
        updatedNewCardData.back = event.target.value;
        setNewCardState(updatedNewCardData);
        break;
    }
  };

  const submitAction = () => {
    // if there is a cardId, update the card
    if (props.cardId) {
      deckContextDispatch({
        type: DECK_ACTIONS.UPDATE_CARD,
        deckId: props.deckId,
        cardId: props.cardId,
        cardBones: newCardState,
      });
    }
    // if there is no cardId, add the card
    else {
      deckContextDispatch({
        type: DECK_ACTIONS.NEW_CARD,
        deckId: props.deckId,
        cardBones: newCardState,
      });
    }
  };

  return (
    <form id="add-card" name="add-card" onSubmit={submitAction}>
      <div className="mt-3">
        <label htmlFor="front">Card Front</label>
        <textarea
          id="front"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-8 sm:text-sm border-gray-300 rounded-md"
          placeholder=""
          onChange={onInputChange}
          value={newCardState.front}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="back">Card Back</label>
        <textarea
          id="back"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-8 sm:text-sm border-gray-300 rounded-md"
          placeholder=""
          onChange={onInputChange}
          value={newCardState.back}
        />
      </div>
    </form>
  );
}

// call this function to commit the form to global state
const Submit = () => {
  const form = document.getElementById("add-card") as HTMLFormElement;
  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
};

export { Submit };
