import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./db";

const app = express();
const host = "0.0.0.0";
const port = process.env.PORT || 2345;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bienvenido a DBZ API");
});

app.listen(port, host, (err) => {
  if (err) throw err;
  else
    console.log(`El server esta ok! en el puerto ${port} y en el host ${host}`);
});
