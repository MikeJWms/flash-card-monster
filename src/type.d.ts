interface CardBones {
  front: string
  back: string
}

interface Card extends CardBones {
  id: string
}

interface DeckBones {
  name: string
  description: string
}

interface Deck extends DeckBones {
  id: string,
  cards: Card[]
}

interface DeckReducerAction {
 type: string
 deckId: string
 cardId?: string
 cardBones?: CardBones
 deckBones?: DeckBones
}

interface ButtonTheme {
  default: string;
  hover: string;
  ring: string
}