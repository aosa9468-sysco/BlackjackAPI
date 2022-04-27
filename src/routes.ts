import { Express } from "express";
import * as deckController from "./controller/deckController";

export default function (app: Express) {
    app.post("/createDeck", deckController.createNewDeck);
}