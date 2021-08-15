import { useParams } from "react-router";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DeckContext } from "../contexts/DeckContext";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import { navHeight as navigationHeight } from "../components/Nav";
import SelectedDeckNotFound from "../components/SelectedDeckNotFound";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline";

export default function StudyMode(props: {}) {
  const { id } = useParams<{ id: string }>();
  const { deckState } = useContext(DeckContext);

  // Get the selected deck from the id parameter
  const selectedDeck: Deck | null = useMemo(() => {
    return deckState.find((element: Deck) => element.id === id);
  }, [id, deckState]);

  // card flip state & logic
  const [flip, setFlip] = useState(false);
  const flipCard = useCallback(() => {
    setFlip(!flip);
  }, [flip]);

  // selecting a card to render
  const numberOfCards = useMemo(() => {
    if (selectedDeck) return selectedDeck.cards.length;
    else return 0;
  }, [selectedDeck]);
  const [selectedCard, setSelectedCard] = useState(0);
  const changeCard = useCallback(
    (steps: number) => {
      let newIndex = selectedCard + steps;
      if (flip) setFlip(false);
      while (newIndex > numberOfCards - 1) {
        newIndex = newIndex - numberOfCards;
      }
      while (newIndex < 0) {
        newIndex = newIndex + numberOfCards;
      }
      setSelectedCard(newIndex);
    },
    [numberOfCards, selectedCard, flip]
  );

  // vars used to make div full height
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const height = navigationHeight();
    setNavHeight(height ? height : 0);
  }, []);

  // register key press events
  const keyRouts = useCallback(
    (e: any) => {
      if (e.isComposing || e.keyCode === 229) {
        return;
      }
      switch (e.key) {
        case "ArrowRight":
          changeCard(1);
          break;
        case "ArrowLeft":
          changeCard(-1);
          break;
        case "ArrowUp":
          flipCard();
          break;
      }
    },
    [changeCard, flipCard]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyRouts);
    return () => {
      document.removeEventListener("keydown", keyRouts);
    };
  }, [keyRouts]);

  // navigate back to dashboard if no deck id is given
  const history = useHistory();
  if (!id) {
    history.push(`/`);
    return null;
  }
  if (!selectedDeck) {
    return SelectedDeckNotFound({ selectedDeck, history });
  }

  return (
    <div
      className="grid grid-cols-3 grid-rows-3"
      style={{ height: `calc(100vh - ${navHeight}px)` }}
    >
      <div className="mb-4 pt-4 pl-4">
        <h1 className="text-xl">Let's Study</h1>
        <p>{`${selectedCard}/${numberOfCards}`} Cards</p>
      </div>
      <button
        className="row-start-2 col-start-1 mr-auto p-8"
        onClick={() => changeCard(-1)}
      >
        <ArrowLeftIcon className="w-8" />
      </button>
      <button
        className="row-start-2 col-start-3 ml-auto p-8"
        onClick={() => changeCard(1)}
      >
        <ArrowRightIcon className="w-8" />
      </button>
      <Button
        className="mt-auto mb-8 row-start-3 col-start-2"
        onClick={flipCard}
      >
        Flip
        <ArrowUpIcon className="inline h-4 ml-4 text-blue-400" />
      </Button>
      <div className="row-start-2 col-start-2 self-center">
        <Card
          card={selectedDeck.cards[selectedCard]}
          className="mx-auto"
          flip={flip}
        />
      </div>
    </div>
  );
}
