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
  DELETE_DECK: "deleteDeck",
  NEW_CARD: "newCard",
  DELETE_CARD: "deleteCard",
};

const createCard = (
  front: string[] = ["Default Front, line 1", "Default Front, line 2"],
  back: string[] = ["Default Back, line 1", "Default Back, line 2"]
): Card => {
  const newCard = {
    front,
    back,
    id: uuid(),
  };
  console.log(newCard);
  return newCard;
};

const createDeck = (
  name: string = "Untitled Deck",
  description: string = "default description",
  cards: Card[] = []
): Deck => {
  return {
    name,
    description,
    id: uuid(),
    cards,
  };
};

const deckReducer = (state: Deck[], action: DeckReducerAction) => {
  console.log("deck reducer");
  switch (action.type) {
    case DECK_ACTIONS.NEW_CARD:
      console.log("adding a card");
      return [
        ...state.map((deck: Deck) => {
          if (!action.cardBones) console.log("no 'CardBones' cardBones");
          else if (deck.id === action.deckId) {
            return {
              name: deck.name,
              description: deck.description,
              id: deck.id,
              cards: [
                ...deck.cards,
                createCard(
                  [...action.cardBones.front],
                  [...action.cardBones.back]
                ),
              ],
            };
          }
          return deck;
        }),
      ];
    case DECK_ACTIONS.DELETE_CARD:
      if (!action.cardId) {
        console.log("no cardId provided");
        return state;
      } else {
        console.log("Deleting this card: ", action.cardId);
        return [
          ...state.map((deck: Deck) => {
            console.log("Im logging from inside a function");
            console.log(deck.cards.filter((v) => true));
            if (deck.id === action.deckId) {
              return {
                name: deck.name,
                description: deck.description,
                id: deck.id,
                cards: deck.cards.filter((cardd) => cardd.id !== action.cardId),
              };
            } else {
              console.log("no deck with that ID found");
            }
            return deck;
          }),
        ];
      }
    case DECK_ACTIONS.NEW_DECK:
      if (!action.deckBones || action.deckBones.name.trim() === "") {
        console.log("no infomation to create new deck");
        return state;
      }
      return [
        ...state,
        createDeck(action.deckBones.name, action.deckBones.description),
      ];
    case DECK_ACTIONS.DELETE_DECK:
      return state.filter((deck) => {
        return deck.id !== action.deckId;
      });
    default:
      return state;
  }
};

const initialDeckState = ((): Deck[] => {
  const initial = getLocalSotrageItem(LOCAL_STORAGE_KEYS.DECK_STATE)
    ? getLocalSotrageItem(LOCAL_STORAGE_KEYS.DECK_STATE)
    : [createDeck("Deck 1", "My first deck", [createCard(), createCard()])];
  return initial;
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
