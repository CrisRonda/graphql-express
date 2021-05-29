import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
import typeDefs from "./db/typesDef";
import resolvers from "./db/resolvers";
import options from "./db/options";

const DB = process.env.NODE_ENV
  ? process.env.URL_DB
  : "mongodb://mongo/mydatabase";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("conected database!"))
  .catch((err) => console.error("error database", err));

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (req) => ({
    ...req,
  }),
});
server.express.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
mongoose.connection.once("open", () =>
  server.start(options, (_server) =>
    console.log(
      `We make magic over at localhost:${_server.port} endpoint:${_server.endpoint}`
    )
  )
);
