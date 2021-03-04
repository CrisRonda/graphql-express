import character from "./character";
import user from "./user";

export default {
  Query: {
    ...character.Query,
  },
  Mutation: {
    ...character.Mutation,
    ...user.Mutation,
  },
  Subscription: {
    ...character.Subscription,
  },
};
