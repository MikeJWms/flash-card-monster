export default function Card(props: {
  card: Card;
  className?: string;
  flip?: Boolean;
}) {
  return (
    <div className={`max-w-lg ${props.className}`}>
      <div className="sm:aspect-w-9 sm:aspect-h-14 md:aspect-w-14 md:aspect-h-9">
        <div className="p-4 bg-white rounded-lg shadow">
          {!props.flip && (
            <div id="front" className="grid grid-cols-1 grid-rows-3 h-full">
              <span className="font-semibold text-gray-400">Question</span>
              <div className="row-start-2 text-center">
                <p className="font-semibold text-xl">{props.card.front[0]}</p>
                <p>{props.card.front[1]}</p>
              </div>
            </div>
          )}

          {props.flip && (
            <div id="back" className="grid grid-cols-1 grid-rows-3 h-full">
              <span className="font-semibold text-gray-400">Answer</span>
              <div className="row-start-2 text-center">
                <p>{props.card.back[0]}</p>
                <p>{props.card.back[1]}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
