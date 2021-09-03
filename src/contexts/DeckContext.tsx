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

const createCard = (cardBones: CardBones): Card => {
  const newCard = {
    front: cardBones.front,
    back: cardBones.back,
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

// Deck Reducer
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
                createCard({
                  front: action.cardBones.front,
                  back: action.cardBones.back,
                }),
              ],
            };
          }
          return deck;
        }),
      ];
    case DECK_ACTIONS.UPDATE_CARD:
      if (!action.cardId) {
        console.log("cardId must be provided");
        return state;
      } else {
        console.log("Updating this card: ", action.cardId);
        return [
          ...state.map((deck: Deck) => {
            if (deck.id === action.deckId) {
              return {
                name: deck.name,
                description: deck.description,
                id: deck.id,
                cards: deck.cards.map((card: Card) => {
                  if (card.id === action.cardId && action.cardBones) {
                    card.front = action.cardBones.front;
                    card.back = action.cardBones.back;
                  }
                  return card;
                }),
              };
            } else {
              console.log("no deck with that ID found");
            }
            return deck;
          }),
        ];
      }
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
                cards: deck.cards.filter(
                  (card: Card) => card.id !== action.cardId
                ),
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
    case DECK_ACTIONS.UPDATE_DECK:
      if (!action.deckBones || action.deckBones.name.trim() === "") {
        console.log("no infomation to create new deck");
        return state;
      }
      return state.map((deck: Deck) => {
        if (deck.id === action.deckId && action.deckBones) {
          deck.name = action.deckBones.name;
          deck.description = action.deckBones.description;
        }
        return deck;
      });
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
    : [
        createDeck(
          "Tutorial",
          "Learn how to use FlashCard.Monster - Click here!",
          [
            createCard({
              front:
                "# An h1 header\n## An h2 header\n### An h3 header\n#### An h4 header\n##### An h5 header\n###### An h6 header\nParagraph text",
              back: "",
            }),
            createCard({
              front:
                "Welcome to Flash Card Monster the fastest way to make flash cards for studdying and memory recall.",
              back: "",
            }),
            createCard({
              front: "Flash Card Monster makes it easy to create flash cards",
              back: "",
            }),
            createCard({
              front: "Create new flash card decks!",
              back: "Click “+ Add Deck” to get started.",
            }),
            createCard({
              front: "Create and organize your flash cards",
              back: "Click “+ Add Card” to create new cards. Don't worry, you can leave and come back, your work will still be here!",
            }),
            createCard({
              front:
                "When it’s time to start studying, click “Play” to review your flash cards one at a time.",
              back: "Navigate back to your decks at any time by clicking the Logo.",
            }),
          ]
        ),
      ];
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
