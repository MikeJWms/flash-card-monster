import { useContext } from "react";
import { DeckContext, DECK_ACTIONS } from "../contexts/DeckContext";
import {
  XCircleIcon,
  DotsHorizontalIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";
import ModalController, { useModal } from "./modal/ModalController";
import AddCardForm, { Submit } from "./add-edit-card/CardForm";

import Markdown from "markdown-to-jsx";

export default function CardSummary(props: { card: Card; deckId: string }) {
  const { card } = props;
  const { deckContextDispatch } = useContext(DeckContext);

  const front = card.front ? card.front : "‎";
  const back = card.back ? card.back : "‎";

  // used to show modal
  const { showModal, setShowModal, handleModalClose } = useModal();

  return (
    <div className="mx-2 my-2 p-4 border w-96 inline-block rounded-lg cursor-pointer relative hover:shadow">
      <Popover className="relative">
        <Popover.Button className={`float-right ml-6 mb-4 rounded-lg`}>
          <DotsHorizontalIcon className={`h-6 text-gray-600`} />
        </Popover.Button>

        <ModalController
          title="Edit Deck"
          show={showModal}
          submitAction={Submit}
          updateShowState={handleModalClose}
          submitButtonText="Update Deck"
        >
          <AddCardForm deckId={props.deckId} cardId={props.card.id} />
        </ModalController>
        <Popover.Panel className="absolute z-10 w-auto right-0 top-0 rounded-md border border-gray-300 shadow-md px-2 py-2 bg-white text-base">
          <button
            onClick={() => {
              console.log("Edit button was pressed");
              setShowModal(true);
            }}
            className="text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex"
          >
            <span className="pr-2">
              <PencilAltIcon className="w-6" />
            </span>
            Edit
          </button>
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

      <div className="prose-sm flex flex-col h-full justify-center">
        <Markdown className="block">{front}</Markdown>
        {back.length > 1 && <Markdown className="block pt-4">{back}</Markdown>}
      </div>
    </div>
  );
}
