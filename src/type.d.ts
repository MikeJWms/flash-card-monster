interface CardBones {
  front: string[]
  back: string[]
}

interface DeckBones {
  name: string
  description: string
}

interface Card {
  front: string[]
  back: string[]
  id: string
}

type Deck = {
  name: string
  description: string
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