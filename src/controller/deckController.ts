import { Request, Response } from "express";
import Deck from "../module/deck";
import { makeNewDeck, modifyDeckResponse } from "../services/deckService";
import { removeCards } from "../utils/deckUtils";

export let createNewDeck = (req: Request, res: Response) => {
    let deck = new Deck(makeNewDeck(req.body));
    let modifiedDeck = modifyDeckResponse(deck);
    deck.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(modifiedDeck);
        }
    });
};

export let openDeck = (req: Request, res: Response) => {
    let deck = Deck.findOne({deckId: req.params.deckId}, (err: any,deck:any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(deck);
        }
      });
}

export let drawCard = async (req: Request, res: Response) => {
    const filter = {deckId: req.params.deckId};
    let deck = await Deck.findOne({deckId: req.params.deckId});
    let cardObj = removeCards(deck.cards,Number(req.params.noOfCards));
    let remainingCards = cardObj.remaining;
    let cards = cardObj.draw;
    const update = {cards: remainingCards, remaining: deck.remaining - Number(req.params.noOfCards)}
    let updatedDeck = Deck.updateOne(filter,update, (err: any,deck:any) => {
        if (err) {
          res.send(err);
        } else {         
          res.send({cards});
        }
      });
}