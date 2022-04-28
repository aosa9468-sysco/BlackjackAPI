import * as faker from 'faker';
import {FULL, SHORT} from '../constants'

export const buildNewDeck = (deckInfo: { type: string; shuffled: boolean; }) => {
    const newDeckInfo = {
        'deckId': faker.datatype.uuid(),
        'type': '',
        'shuffled': false,
        'remaining': 0,
        'cards': []

    }
    if (deckInfo.type === FULL) {
        newDeckInfo.type = FULL;
        newDeckInfo.remaining = 52;
        newDeckInfo.cards= makeCards(FULL);
    }
    else {
        newDeckInfo.type = SHORT;
        newDeckInfo.remaining = 36;
        newDeckInfo.cards = makeCards(SHORT);

    }
    if (deckInfo.shuffled === true) {
        newDeckInfo.shuffled = true;
        newDeckInfo.cards = shuffleCards(newDeckInfo.cards);
    }
    return newDeckInfo;
}

export const makeCards = (type: string) => {
    let values = ['ACE','2','3','4','5','6','7','8','9','10','JACK', 'QUEEN','KING'];
    let shortVals = ['ACE','6','7','8','9','10','JACK', 'QUEEN','KING'];
    let types = ['CLUBS','DIAMONDS','HEARTS','SPADES'];
    let deck = [];
    let temp: string[] = [];
    type === FULL ? temp = values : temp = shortVals;
    for(let i=0; i<temp.length;i++){
        for(let j=0; j<types.length;j++){
            let card = {
                value: temp[i],
                suit : types[j],
                code: temp[i].charAt(0) + types[j].charAt(0)
            }
            deck.push(card);

        }
    }
    return deck;
}

export const shuffleCards = (cards: { value: string; suit: string; code: string; }[]) => {
    for(let i=0; i< cards.length; i++){
        let j = Math.floor(Math.random() * cards.length);
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp
    }
    return cards;
}

export const removeCards = (cards,num: number) => {
    let drawCards = cards.splice(0,num);
    return {draw: drawCards, remaining: cards };
    
}