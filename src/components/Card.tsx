import { Transition } from "@headlessui/react";
import Markdown from "markdown-to-jsx";
import { useEffect, useRef, useState } from "react";

export default function Card(props: {
  card: Card;
  className?: string;
  flip?: Boolean;
  index?: number
}) {
  const isFirstRender = useRef(true);

  const [isShow, setIsShow] = useState(true);

  const [animationInterval] = useState(150);

  const [showingCard, setShowingCard] = useState(props.card);

  const updateTimer: any = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (!updateTimer.current) {
      setIsShow(false);
      updateTimer.current = setTimeout(() => {
        setIsShow(true);
        setShowingCard(props.card);
        updateTimer.current = null;
      }, animationInterval * 2);
    }
  }, [props.card, animationInterval]);

  return (
    <Transition
      show={isShow}
      enter={`transition ease-out duration-${animationInterval}`}
      enterFrom="transform opacity-75 scale-95 translate-x-1/2"
      enterTo="transform opacity-100 scale-100"
      leave={`transition ease-in duration-${animationInterval}`}
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95 -translate-x-1/2"
    >
      <div className={`max-w-lg ${props.className}`}>
        <div className="sm:aspect-w-9 sm:aspect-h-14 md:aspect-w-14 md:aspect-h-9">
          <div className="p-4 bg-white rounded-lg shadow">
            {!props.flip && (
              <div id="front" className="grid grid-cols-1 grid-rows-3 h-full">
                <span className="font-semibold text-gray-400">Question</span>
                <div className="row-start-2 text-center">
                  <Markdown>{showingCard.front}</Markdown>
                </div>
              </div>
            )}

            {props.flip && (
              <div id="back" className="grid grid-cols-1 grid-rows-3 h-full">
                <span className="font-semibold text-gray-400">Answer</span>
                <div className="row-start-2 text-center">
                  <Markdown>{showingCard.back}</Markdown>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
}
