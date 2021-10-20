import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { DeckContext, DECK_ACTIONS } from "../contexts/DeckContext";
import {
  XCircleIcon,
  DotsHorizontalIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import { Popover } from "@headlessui/react";

import ModalController, { useModal } from "./modal/ModalController";
import AddDeckForm, { Submit } from "./add-edit-deck/DeckForm";

export default function DeckSummary(props: { deck: Deck }) {
  const { deck } = props;
  const { deckContextDispatch } = useContext(DeckContext);
  const history = useHistory();
  function navToDeck(id: string) {
    history.push(`/deck-view/${id}`);
  }

  // used to show modal
  const [showModal, setShowModal, handleModalClose] = useModal();

  return (
    <div
      className="mx-2 my-2 p-4 border w-72 inline-block rounded-lg cursor-pointer relative hover:shadow"
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        navToDeck(deck.id);
      }}
    >
      <ModalController
        title="Edit Deck"
        show={showModal}
        submitAction={Submit}
        updateShowState={handleModalClose}
        submitButtonText="Update Deck"
      >
        <AddDeckForm deckId={deck.id} />
      </ModalController>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className={`float-right rounded-lg`}>
              <DotsHorizontalIcon className={`h-6 text-gray-600`} />
            </Popover.Button>
            <Popover.Overlay
              className={`${
                open ? "opacity-0 fixed inset-0" : "opacity-0"
              } bg-black`}
            />
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
                  console.log("Deleting deck");
                  deckContextDispatch({
                    type: DECK_ACTIONS.DELETE_DECK,
                    deckId: deck.id,
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
          </>
        )}
      </Popover>

      <div
        onClick={() => {
          navToDeck(deck.id);
        }}
      >
        <p className="text-xl">{deck.name}</p>
        <p className="text-sm text-gray-600 mb-2">{deck.cards.size} cards</p>
        <p>{deck.description ? deck.description : " "}</p>
      </div>
    </div>
  );
}
