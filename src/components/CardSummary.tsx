import { useContext } from "react";
import { DeckContext, DECK_ACTIONS } from "../contexts/DeckContext";
import {
  XCircleIcon,
  DotsHorizontalIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";
import Card from "./Card";

export default function CardSummary(props: { card: Card; deckId: string }) {
  const { card } = props;
  const { deckContextDispatch } = useContext(DeckContext);

  const front1 = card.front[0] ? card.front[0] : " ‎";
  const front2 = card.front[1] ? card.front[1] : " ‎";
  const back1 = card.back[0] ? card.back[0] : " ‎";
  const back2 = card.back[1] ? card.back[1] : " ‎";

  return (
    <div className="mx-2 my-2 p-4 border w-72 inline-block rounded-lg cursor-pointer relative hover:shadow">
      <Popover className="relative">
        <Popover.Button className={`absolute right-0 top-0 rounded-lg`}>
          <DotsHorizontalIcon className={`h-6 text-gray-600`} />
        </Popover.Button>

        <Popover.Panel className="absolute z-10 w-auto right-0 top-0 rounded-md border border-gray-300 shadow-md px-2 py-2 bg-white text-base">
          {/* <button
            onClick={() => {
              console.log("Edit button was pressed");
            }}
            className="text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex"
          >
            <span className="pr-2">
              <PencilAltIcon className="w-6" />
            </span>
            Edit
          </button> */}
          <button
            onClick={() => {
              // delete card
              deckContextDispatch({
                type: DECK_ACTIONS.DELETE_CARD,
                deckId: props.deckId,
                cardId: card.id,
              });
            }}
            className={`text-red-600 px-2 py-1 mb-1 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75 hover:bg-red-100 flex`}
          >
            <span className="pr-2">
              <XCircleIcon className="w-6" />
            </span>
            Delete
          </button>
        </Popover.Panel>
      </Popover>

      <div>
        <p className="text-xl">{front1}</p>
        <p className="text-sm text-gray-600 mb-2">{front2}</p>
        <p className="text-xl">{back1}</p>
        <p className="text-sm text-gray-600 mb-2">{back2}</p>
      </div>
    </div>
  );
}
