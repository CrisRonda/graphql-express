import { PubSub } from "graphql-yoga";
import { verifyToken } from "../jwt";
import Character from "../models/Character";
const pubsub = new PubSub();

const resolvers = {
  Query: {
    character: async () => Character.find(),
    charactersByName: (_, { limit = 40, name }) =>
      Character.find({ name: { $regex: name } }).limit(limit),
  },

  Mutation: {
    createCharacter: async (_, { name, power, image, race }, context) => {
      verifyToken(context);
      const character = new Character({ name, power, image, race });
      await character.save();
      pubsub.publish("newCharacter", { newCharacter: character });
      return character;
    },
    updateCharacter: async (_, { id, name, power, image, race }, context) => {
      verifyToken(context);
      const character = await Character.findOneAndUpdate(
        { _id: id },
        { name, power, image, race },
        { new: true }
      );
      return character;
    },
    deleteCharacter: async (_, { name }, context) => {
      verifyToken(context);
      await Character.findOneAndDelete({ name });
      pubsub.publish("oldCharacter", { oldCharacter: name });
      return true;
    },
  },

  Subscription: {
    newCharacter: {
      subscribe: (_, {}) => {
        return pubsub.asyncIterator("newCharacter");
      },
    },

    oldCharacter: {
      subscribe: (_, {}) => {
        return pubsub.asyncIterator("oldCharacter");
      },
    },
  },
};
export default resolvers;
