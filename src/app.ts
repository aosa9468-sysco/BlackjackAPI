import express from "express";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
  routes(app);
});