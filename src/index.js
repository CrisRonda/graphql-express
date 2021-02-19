import express from "express";
import bodyParser from "body-parser";
import "./db";
const app = express();
const port = 2345;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bienvenido a DBZ API");
});

app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Corriendo en localhost:${port}`);
});
