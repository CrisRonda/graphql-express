import { PubSub } from "graphql-yoga";
import Character from "../models/Character";
const pubsub = new PubSub();

const resolvers = {
  Query: {
    character: () => Character.find(),
  },

  Mutation: {
    createCharacter: async (_, { name, power, image, race }) => {
      const character = new Character({ name, power, image, race });
      await character.save();
      pubsub.publish("newCharacter", { newCharacter: character });
      return character;
    },
    updateCharacter: async (_, { name, power, image, race }) => {
      const character = await Character.findOneAndUpdate(
        { _id: id },
        { name, power, image, race },
        { new: true }
      );
      return character;
    },
    deleteCharacter: async (_, { name }) => {
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
