import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
import typeDefs from "./typesDef";
import resolvers from "./resolvers";

const port = process.env.PORTQL || 4000;

const DB =
  process.env.NODE_ENV === "production"
    ? process.env.URL_DB
    : "mongodb://mongo/mydatabase";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("conected!", db.connection.host))
  .catch((err) => console.error(err));

const server = new GraphQLServer({ typeDefs, resolvers });

mongoose.connection.once("open", () =>
  server.start({ port }, (_server) =>
    console.log(
      `We make magic over at localhost:${_server.port} endpoint:${_server.endpoint}`
    )
  )
);
