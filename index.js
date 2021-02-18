import express from "express";

const app = express();
const port = 2345;

app.get("/", (req, res) => {
  res.send("Hola!");
});

app.listen(port, (err) => {
  if (err) throw err;
  else console.log(`Corriendo en localhost:${port}`);
});

console.log("Ready!");
