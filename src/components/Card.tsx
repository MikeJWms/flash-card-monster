import { Transition } from "@headlessui/react";
import Markdown from "markdown-to-jsx";
import { useEffect, useRef, useState } from "react";

export default function Card(props: {
  card: Card;
  className?: string;
  flip?: Boolean;
  index: number;
}) {
  /* Swipe Animation */
  const isFirstRender = useRef(true);
  const [isShow, setIsShow] = useState(true);
  const [animationInterval] = useState(150);
  const [showingCard, setShowingCard] = useState(props.card);
  const updateTimer: any = useRef(null);
  const prevIndex = useRef(0);
  const flipForward = useRef(true);

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

  useEffect(() => {
    if (props.index > prevIndex.current) {
      flipForward.current = true;
    } else {
      flipForward.current = false;
    }
    prevIndex.current = props.index;
  }, [props.index]);

  /* End Swipe Animation */

  /* Flip Animation */
  const animatingFlip = useRef(false); // solves problem where switching cards triggers flip animation
  const [flipShowFront, setFlipShowFront] = useState(true);
  const [flipShowBack, setFlipShowBack] = useState(false);
  const [flipAnimationTime] = useState(200);
  useEffect(() => {
    animatingFlip.current = true;
    // props.flip: false - front of card is displayed
    props.flip ? setFlipShowFront(false) : setFlipShowBack(false);
    setTimeout(() => {
      props.flip ? setFlipShowBack(true) : setFlipShowFront(true);
      animatingFlip.current = false;
    }, flipAnimationTime + 50);
  }, [props.flip, flipAnimationTime]);
  /* End Flip Animation */

  return (
    <Transition
      show={isShow}
      enter={`transition ease-out duration-${animationInterval}`}
      enterFrom={`transform opacity-75 scale-95 ${
        flipForward.current ? "" : "-"
      }translate-x-1/2`}
      enterTo="transform opacity-100 scale-100"
      leave={`transition ease-in duration-${animationInterval}`}
      leaveFrom="transform opacity-100 scale-100"
      leaveTo={`transform opacity-0 scale-95 ${
        flipForward.current ? "-" : ""
      }translate-x-1/2`}
      className="perspective-9"
    >
      <Transition
        show={flipShowFront}
        enter={`transition ease-out duration-${flipAnimationTime}`}
        enterFrom={
          animatingFlip.current
            ? `$transform opacity-75 scale-95 rotate-x-90`
            : ""
        }
        enterTo="transform opacity-100 scale-100"
        leave={`transition ease-in duration-${flipAnimationTime}`}
        leaveFrom="transform opacity-100 scale-100"
        leaveTo={
          animatingFlip.current
            ? `transform opacity-100 scale-95 rotate-x-90`
            : ""
        }
      >
        <CardBody
          content={showingCard.front}
          label="Question"
          className={`${props.className}`}
        />
      </Transition>

      <Transition
        show={flipShowBack}
        enter={`transition ease-out duration-${flipAnimationTime}`}
        enterFrom={`transform opacity-75 scale-95 -rotate-x-90`}
        enterTo="transform opacity-100 scale-100"
        leave={`transition ease-in duration-${flipAnimationTime}`}
        leaveFrom="transform opacity-100 scale-100"
        leaveTo={`transform opacity-100 scale-95 -rotate-x-90`}
      >
        <CardBody
          content={showingCard.back}
          label="Answer"
          className={props.className}
        />
      </Transition>
    </Transition>
  );
}

function CardBody(props: {
  content: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`p-4 bg-white rounded-lg shadow max-w-lg ${props.className}`}
      style={{
        aspectRatio: "14/9",
      }}
    >
      {/* Move back to tailwind aspect ratio for safari-mobile support */}
      <div id="front" className="grid grid-cols-1 grid-rows-3 h-full">
        <span className="font-semibold text-gray-400">{props.label}</span>
        <div className="row-start-2 text-center prose my-auto">
          <Markdown>{props.content}</Markdown>
        </div>
      </div>
    </div>
  );
}
