import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(cors());

const title = "My minimal babel config for React client + express server";

app.get("/title", (req, res) => res.json({ title }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
