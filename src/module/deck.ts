import * as mongoose from "mongoose";

const uri: string = "mongodb://127.0.0.1:27017/local";

mongoose.connect(uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected to MongoDB!");
  }
});

export interface Cards extends mongoose.Document {
    value: string;
    suit: string;
    code: string;
}


export interface Deck extends mongoose.Document {
  deckId: string;
  type: string;
  shuffled: boolean;
  remaining:number;
  cards: mongoose.Types.DocumentArray<Cards>;
}

export const DeckSchema = new mongoose.Schema({
  deckId: { type: String, required: true },
  type: { type: String, required: true },
  shuffled: { type: Boolean, required: true },
  remaining: { type: Number},
  cards: [{ value: String, suit: String, code: String}],
});

const Deck = mongoose.model<Deck>("Deck", DeckSchema);
export default Deck;