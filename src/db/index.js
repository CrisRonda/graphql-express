import { GraphQLServer } from "graphql-yoga";
import mongoose from "mongoose";
import typeDefs from "./typesDef";
import resolvers from "./resolvers";
mongoose
  .connect("mongodb://mongo/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => console.log("conected!", db.connection.host))
  .catch((err) => console.error(err));

const server = new GraphQLServer({ typeDefs, resolvers });
mongoose.connection.once("open", () =>
  server.start(() => console.log("We make magic over at localhost:4000"))
);
