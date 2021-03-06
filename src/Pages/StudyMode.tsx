import { useParams } from "react-router";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DeckContext } from "../contexts/DeckContext";
import Button, { BUTTON_THEME } from "../components/Button";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import { navHeight as navigationHeight } from "../components/Nav";
import SelectedDeckNotFound from "../components/SelectedDeckNotFound";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ReplyIcon,
} from "@heroicons/react/outline";

export default function StudyMode(props: {}) {
  const { id } = useParams<{ id: string }>();
  const { deckState } = useContext(DeckContext);

  // Get the selected deck from the id parameter
  const selectedDeck: Deck | null = useMemo(
    () => deckState.get(id),
    [id, deckState]
  );

  // convert cardmap to array which can be trversed by component
  const cardArray: [string, Card][] | null = useMemo(
    () => (selectedDeck ? [...selectedDeck.cards] : null),
    [selectedDeck]
  );

  // card flip state & logic
  const [flip, setFlip] = useState(false);
  const flipCard = useCallback(() => {
    setFlip(!flip);
  }, [flip]);

  // selecting a card to render
  const numberOfCards = useMemo(() => {
    if (selectedDeck) return selectedDeck.cards.size;
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
      className="grid overflow-hidden"
      style={{
        height: `calc(100vh - ${navHeight}px)`,
        gridTemplateRows: "1fr minmax(0, 4fr) 1fr",
        gridTemplateColumns: "1fr minmax(0, 4fr) 1fr",
      }}
    >
      <div className="mb-4 pt-4 pl-4 col-span-2">
        <h1 className="text-xl">Let's Study</h1>
        <p>{`${1 + selectedCard}/${numberOfCards}`} Cards</p>
      </div>
      <button
        className="row-start-3 md:row-start-2 col-start-1 mr-auto p-8 mt-auto mb-2 md:mb-0 md:mt-0"
        onClick={() => changeCard(-1)}
      >
        {selectedCard === 0 ? (
          <ReplyIcon className="w-8 transform rotate-180" />
        ) : (
          <ArrowLeftIcon className="w-8" />
        )}
      </button>
      <button
        className="row-start-3 md:row-start-2 col-start-3 ml-auto p-8 mt-auto mb-2 md:mb-0 md:mt-0"
        onClick={() => changeCard(1)}
      >
        {selectedCard + 1 >= numberOfCards ? (
          <ReplyIcon className="w-8" />
        ) : (
          <ArrowRightIcon className="w-8" />
        )}
      </button>
      <div className="mt-auto mb-8 row-start-3 col-start-2 w-full z-10 flex justify-around">
        {!flip && (
          <Button className="w-full max-w-xs" onClick={flipCard}>
            Flip
            <ArrowUpIcon className="hidden md:inline h-4 ml-4 text-blue-400" />
          </Button>
        )}
        {flip && (
          <Fragment>
            <Button
              className=""
              theme={BUTTON_THEME.WARNING}
              onClick={flipCard}
            >
              Not yet
            </Button>

            <Button
              className=""
              theme={BUTTON_THEME.SUCCESS}
              onClick={flipCard}
            >
              Got it
            </Button>
          </Fragment>
        )}
      </div>
      <div className="col-span-3 md:col-span-1 m-4 md:m-0 row-start-2 md:col-start-2 self-center">
        {cardArray && (
          <Card
            card={cardArray[selectedCard][1]}
            className="mx-auto"
            flip={flip}
            index={selectedCard}
          />
        )}
      </div>
    </div>
  );
}
