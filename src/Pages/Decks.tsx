import { useContext } from "react";
import { DeckContext } from "../contexts/DeckContext";
import DeckSummary from "../components/DeckSummary";
import { BUTTON_THEME, BUTTON_SIZE } from "../components/Button";
import DefaultLayout from "../layouts/DefaultLayout";
import AddDeckModal from "../components/add-edit-deck/AddDeckModal";
import { mapMap } from "../helpers/jsMap";
import { Popover } from "@headlessui/react";
import {
  DotsHorizontalIcon,
  DownloadIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import ModalController, { useModal } from "../components/modal/ModalController";

export default function Decks() {
  const { deckState } = useContext(DeckContext);

  return (
    <DefaultLayout>
      <div className="mb-4">
        <h1 className="text-xl mb-4 mr-4 inline">Decks</h1>
        <AddDeckModal
          button={{ size: BUTTON_SIZE.SMALL, theme: BUTTON_THEME.SUCCESS }}
        />
        {PopoverMenu()}
      </div>
      {mapMap(deckState, (deck: Deck, key: string) => {
        return <DeckSummary key={deck.id} deck={deck}></DeckSummary>;
      })}
    </DefaultLayout>
  );
}

// TODO: made a README in the modal component folder on how to use
//       Come up with a way to launch more than one modal in this menue
const PopoverMenu = () => {
  const [showImportModal, setShowImportModal, handleImportModalClose] =
    useModal();
  const [showExportModal, setShowExportModal, handleExportModalClose] =
    useModal();
  return (
    <Popover className="relative">
      <Popover.Button className={`float-right ml-6 mb-4 rounded-lg`}>
        <DotsHorizontalIcon className={`h-6 text-gray-600`} />
      </Popover.Button>

      <ModalController
        title="Test Title"
        show={showImportModal}
        submitAction={() => {
          console.log("submit was pressed");
        }}
        updateShowState={handleImportModalClose}
        submitButtonText="close"
      >
        <h1>Here's some content</h1>
      </ModalController>

      <ModalController
        title="Test Title"
        show={showExportModal}
        submitAction={() => {
          console.log("submit was pressed");
        }}
        updateShowState={handleExportModalClose}
        submitButtonText="close"
      >
        <h1>Here's some content</h1>
      </ModalController>

      <Popover.Panel className="absolute z-10 w-auto right-0 top-0 rounded-md border border-gray-300 shadow-md px-2 py-2 bg-white text-base">
        <button
          onClick={() => {
            console.log("Export button was pressed");
            setShowImportModal(true);
          }}
          className="text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex"
        >
          <span className="pr-2">
            <UploadIcon className="w-6" />
          </span>
          Import Decks
        </button>
        <button
          onClick={() => {
            console.log("Import button was pressed");
            setShowExportModal(true);
          }}
          className="text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex"
        >
          <span className="pr-2">
            <DownloadIcon className="w-6" />
          </span>
          Download Decks
        </button>
      </Popover.Panel>
    </Popover>
  );
};
