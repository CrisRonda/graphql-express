const typeDefsCharacter = `
  type Character {
    id: ID!
    name: String!
    power: String!
    image: String!
    race: String!
  }
  `;
const queriesCharacter = `
  character: [Character]
  charactersByName(limit:Int, name: String!): [Character]`;

const subscriptionCharacter = `
  newCharacter: Character
  oldCharacter: String`;

const mutationCharacter = `
    createCharacter(name: String! power: String! image: String! race: String!): Character!
    updateCharacter(id: ID! name: String! power: String! image: String! race: String!): Character!
    deleteCharacter(name: String!): Boolean!
  `;

export {
  typeDefsCharacter,
  queriesCharacter,
  subscriptionCharacter,
  mutationCharacter,
};
