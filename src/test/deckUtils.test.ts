import { FULL } from "../constants";
import { buildNewDeck } from "../utils/deckUtils";

describe('Method: buildNewDeck', () => {
  it('should return 52 cards deck for the given type is FULL', () => {
    const response = buildNewDeck({type: FULL, shuffled: true});
    const cardsLength = response.cards.length;
    expect(cardsLength).toBe(52);
  });
});

