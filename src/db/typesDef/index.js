import {
  typeDefsCharacter,
  mutationCharacter,
  queriesCharacter,
  subscriptionCharacter,
} from "./characters";
import { typesDefUser, mutationUser } from "./user";

const typedefs = `
${typeDefsCharacter}
${typesDefUser}
type Query {
  ${queriesCharacter}
}
type Mutation {
  ${mutationCharacter}
  ${mutationUser}
}
type Subscription {
  ${subscriptionCharacter}
}
  `;
export default typedefs;
