import { Deck } from "../module/deck";
import { buildNewDeck } from "../utils/deckUtils";

export const makeNewDeck = (deckInfo: { type: string; shuffled: boolean; }) => {
    console.info(`Preparing to create a new dec`);
    return(buildNewDeck(deckInfo));    
}

export const modifyDeckResponse = (deck: Deck & { _id: any; }) => {
    let deckResponse = {
        'deckId': deck.deckId,
        'type': deck.type,
        'shuffled': deck.shuffled,
        'remaining': deck.remaining,
    };
    console.info(`Create a new Deck. DeckId:${deckResponse.deckId}`);
    return deckResponse;
}

export const drawCardsfromDeck = (deck) => {

}