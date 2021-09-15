import { createContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

import {
  getLocalSotrageItem,
  setLocalSotrageItem,
  LOCAL_STORAGE_KEYS,
} from "../helpers/localstorage";

export const DeckContext = createContext<any>(null);

export const DECK_ACTIONS = {
  NEW_DECK: "newDeck",
  UPDATE_DECK: "editDeck",
  DELETE_DECK: "deleteDeck",
  NEW_CARD: "newCard",
  UPDATE_CARD: "updateCard",
  DELETE_CARD: "deleteCard",
};

const createCard = (
  CardPrimitive: CardPrimitive
): { card: Card; id: string } => {
  const newCard = {
    front: CardPrimitive.front,
    back: CardPrimitive.back,
    id: uuid(),
  };
  console.log(newCard);
  return { id: newCard.id, card: newCard };
};

const createCardMap = (cardPrimitives: CardPrimitive[]): Map<string, Card> => {
  const map = new Map();
  cardPrimitives.forEach((value) => {
    const { id, card } = createCard({ front: value.front, back: value.back });
    map.set(id, card);
  });
  return map;
};

const createDeck = (
  name: string = "Untitled Deck",
  description: string = "default description",
  cards?: Map<string, Card>
): Deck => {
  if (!cards) {
    cards = new Map();
  }
  return {
    name,
    description,
    id: uuid(),
    cards,
  };
};

// Deck Reducer
const deckReducer = (state: DeckState, action: DeckReducerAction) => {
  let newState: DeckState | null = null;

  switch (action.type) {
    case DECK_ACTIONS.NEW_CARD:
      if (!action.deckId || !action.CardPrimitive) return state;
      var { id, card } = createCard({
        front: action.CardPrimitive.front,
        back: action.CardPrimitive.back,
      });
      newState = new Map(state);
      newState.get(action.deckId)?.cards.set(id, card);

      return newState;

    case DECK_ACTIONS.UPDATE_CARD:
      if (!action.deckId || !action.cardId || !action.CardPrimitive)
        return state;

      newState = new Map(state);
      newState.get(action.deckId)?.cards.set(action.cardId, {
        id: action.cardId,
        ...action.CardPrimitive,
      });

      return newState;

    case DECK_ACTIONS.DELETE_CARD:
      if (!action.deckId || !action.cardId) return state;

      newState = new Map(state);
      newState.get(action.deckId)?.cards.delete(action.cardId);

      return newState;
    case DECK_ACTIONS.NEW_DECK:
      if (!action.deckBones || action.deckBones.name.trim() === "") {
        console.log("no infomation to create new deck");
        return state;
      }
      // create new with existing state
      newState = new Map(state);
      const newDeck = createDeck(
        action.deckBones.name,
        action.deckBones.description
      );
      newState.set(newDeck.id, newDeck);

      return newState;

    case DECK_ACTIONS.UPDATE_DECK:
      if (
        !action.deckId ||
        !action.deckBones ||
        action.deckBones.name.trim() === ""
      ) {
        console.log("no infomation to create new deck");
        return state;
      }
      newState = new Map(state);
      const updateDeck = newState.get(action.deckId);
      if (!updateDeck) return state;
      updateDeck.name = action.deckBones.name;
      updateDeck.description = action.deckBones.description;

      return newState.set(action.deckId, updateDeck);

    case DECK_ACTIONS.DELETE_DECK:
      if (!action.deckId) {
        console.log("can't delete a deck without its ID");
        return state;
      }
      newState = new Map(state);
      newState.delete(action.deckId);
      return newState;
    default:
      return state;
  }
};

const initialDeckState = ((): DeckState => {
  const stateFromLocalStorage = getLocalSotrageItem(
    LOCAL_STORAGE_KEYS.DECK_STATE
  );
  const newState = stateFromLocalStorage
    ? stateFromLocalStorage
    : (() => {
        const defaut = createDeck(
          "Tutorial",
          "Learn how to use FlashCard.Monster - Click here!",
          createCardMap([
            {
              front: "### Welcome to Flash Card Monster",
              back: "### the fastest way to make flash cards for studdying and memory recall.",
            },
            {
              front:
                "### Flash Card Monster makes it easy to create flash cards",
              back: "",
            },
            {
              front: "### Create new flash card decks!",
              back: "### Click “+ Add Deck” to get started.",
            },
            {
              front: "### Create and organize your flash cards",
              back: "### Click “+ Add Card” to create new cards. Don't worry, you can leave and come back, your work will still be here!",
            },
            {
              front:
                "### When it’s time to start studying, click “Play” to review your flash cards one at a time.",
              back: "### Navigate back to your decks at any time by clicking the Logo.",
            },
          ])
        );

        return new Map().set(defaut.id, defaut);
      })();
  setLocalSotrageItem(LOCAL_STORAGE_KEYS.DECK_STATE, newState);

  return newState;
})();

export const DeckContextProvider = (props: any) => {
  const [deckState, deckContextDispatch] = useReducer(
    deckReducer,
    initialDeckState
  );

  useEffect(() => {
    setLocalSotrageItem(LOCAL_STORAGE_KEYS.DECK_STATE, deckState);
  }, [deckState]);

  return (
    <DeckContext.Provider value={{ deckState, deckContextDispatch }}>
      {props.children}
    </DeckContext.Provider>
  );
};
