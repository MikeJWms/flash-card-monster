type DeckState = Map<string, Deck>

interface CardPrimitive {
  front: string
  back: string
}

interface Card extends CardPrimitive {
  id: string
}

interface DeckBones {
  name: string
  description: string
}

interface Deck extends DeckBones {
  id: string,
  cards: Map<string, Card>
}

interface DeckReducerAction {
 type: string
 deckId: string
 cardId?: string
 CardPrimitive?: CardPrimitive
 deckBones?: DeckBones
}

interface ButtonTheme {
  default: string;
  hover: string;
  ring: string
}