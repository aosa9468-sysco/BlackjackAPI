import express, { Request, Response } from "express";
const app = express();
const port = 3000;
import routes from "./routes";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  return console.log(`App is listening at http://localhost:${port}`);
  routes(app);
});