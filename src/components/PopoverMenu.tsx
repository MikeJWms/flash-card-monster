import { Popover } from "@headlessui/react";
import {
  DotsHorizontalIcon,
  UploadIcon,
  DownloadIcon,
} from "@heroicons/react/solid";

// THIS COMPONENT IS A WORK IN PROGRESS

/*
This is a general pop-over menu component
The user passes an object of menue items 



*/

export default function PopoverMenue(props: {}) {
  // array of objects
  // {type: button | text | space | divider, text?: string, JSX.Element, onClick: ()=>{}}

  return (
    <Popover className="relative">
      <Popover.Button className={`float-right ml-6 mb-4 rounded-lg`}>
        <DotsHorizontalIcon className={`h-6 text-gray-600`} />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 w-auto right-0 top-0 rounded-md border border-gray-300 shadow-md px-2 py-2 bg-white text-base">
        <button
          onClick={() => {
            console.log("Upload button was pressed");
          }}
          className="text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex"
        >
          <span className="pr-2">
            <UploadIcon className="w-6" />
          </span>
          Upload Decks
        </button>
        <button
          onClick={() => {
            console.log("Download button was pressed");
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
}
