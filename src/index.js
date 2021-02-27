import express from "express";
import bodyParser from "body-parser";
import "./db";
const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 2345;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bienvenido a DBZ API");
});

app.listen(port, host, (err) => {
  if (err) throw err;
  else console.log(`El server esta ok!`);
});
