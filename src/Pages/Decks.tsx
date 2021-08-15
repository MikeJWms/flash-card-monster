import { useContext } from "react";
import { DeckContext } from "../contexts/DeckContext";
import AddDeck, { AddDeckKit } from "../components/AddDeck";
import DeckSummary from "../components/DeckSummary";
import Button, { BUTTON_THEME, BUTTON_SIZE } from "../components/Button";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Decks() {
  const { deckState } = useContext(DeckContext);

  const { showAddDeck, setShowAddDeck } = AddDeckKit();

  return (
    <DefaultLayout>
      <AddDeck show={showAddDeck} updateShowState={setShowAddDeck} />
      <div className="mb-4">
        <h1 className="text-xl mb-4 mr-4 inline">Decks</h1>
        <Button
          onClick={() => {
            setShowAddDeck(true);
          }}
          size={BUTTON_SIZE.SMALL}
          theme={BUTTON_THEME.SUCCESS}
          className=""
        >
          + Add Deck
        </Button>
      </div>
      {deckState.map((deck: Deck) => {
        return <DeckSummary key={deck.id} deck={deck}></DeckSummary>;
      })}
    </DefaultLayout>
  );
}
