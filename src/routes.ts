import { Express } from "express";
import * as deckController from "./controller/deckController";

export default function (app: Express) {
    app.post("/createDeck", deckController.createNewDeck);

    app.get("/openDeck/:deckId", deckController.openDeck);

    app.patch('/drawCards/deckId/:deckId/noOfCards/:noOfCards',deckController.drawCard)
}