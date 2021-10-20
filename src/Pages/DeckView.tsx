import { useParams } from "react-router-dom";
import { DeckContext } from "../contexts/DeckContext";
import { useContext } from "react";
import Button, { BUTTON_THEME, BUTTON_SIZE } from "../components/Button";
import { useHistory } from "react-router-dom";
import CardSummary from "../components/CardSummary";
import { PlayIcon } from "@heroicons/react/solid";
import DefaultLayout from "../layouts/DefaultLayout";
import SelectedDeckNotFound from "../components/SelectedDeckNotFound";

import AddCardModal from "../components/add-edit-card/AddCardModal";
import { mapMap } from "../helpers/jsMap";

export default function DeckView() {
  const { id } = useParams<{ id: string }>();
  const { deckState } = useContext(DeckContext);

  const history = useHistory();

  if (!id) {
    history.push(`/`);
    return null;
  }

  const selectedDeck: Deck = deckState.get(id);

  if (!selectedDeck) {
    console.log("Deck not selected ", selectedDeck);
    return SelectedDeckNotFound({ selectedDeck, history });
  }

  return (
    <DefaultLayout>
      <div className="mb-4">
        <h1 className="text-xl mb-4 mr-4 inline">{selectedDeck.name}</h1>
        <AddCardModal
          deckId={id}
          button={{ size: BUTTON_SIZE.SMALL, theme: BUTTON_THEME.SUCCESS }}
        />
        <Button
          className=" ml-4"
          onClick={() => {
            history.push(`/study-mode/${id}`);
          }}
          size={BUTTON_SIZE.SMALL}
          theme={BUTTON_THEME.PRIMARY}
        >
          <div className="flex items-baseline">
            <PlayIcon className="h-4 mr-2 self-center" />

            <span className="">Play</span>
          </div>
        </Button>
      </div>
      <p>{selectedDeck.description}</p>

      <div className="flex flex-wrap">
        {mapMap(selectedDeck.cards, (card, key) => {
          return <CardSummary key={card.id} card={card} deckId={id} />;
        })}
      </div>
    </DefaultLayout>
  );
}
