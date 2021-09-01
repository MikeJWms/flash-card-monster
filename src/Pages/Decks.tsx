import { useContext } from "react";
import { DeckContext } from "../contexts/DeckContext";
import DeckSummary from "../components/DeckSummary";
import { BUTTON_THEME, BUTTON_SIZE } from "../components/Button";
import DefaultLayout from "../layouts/DefaultLayout";
import AddDeckModal from "../components/add-edit-deck/AddDeckModal";

export default function Decks() {
  const { deckState } = useContext(DeckContext);

  return (
    <DefaultLayout>
      <div className="mb-4">
        <h1 className="text-xl mb-4 mr-4 inline">Decks</h1>
        <AddDeckModal
          button={{ size: BUTTON_SIZE.SMALL, theme: BUTTON_THEME.SUCCESS }}
        />
      </div>
      {deckState.map((deck: Deck) => {
        return <DeckSummary key={deck.id} deck={deck}></DeckSummary>;
      })}
    </DefaultLayout>
  );
}
