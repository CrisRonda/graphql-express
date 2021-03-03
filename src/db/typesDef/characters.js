const typeDefsCharacter = `
  type Query {
    character: [Character]
    charactersByName(limit:Int, name: String!): [Character]
  }
  type Character {
    id: ID!
    name: String!
    power: String!
    image: String!
    race: String!
  }
  type Mutation {
    createCharacter(name: String! power: String! image: String! race: String!): Character!
    updateCharacter(id: ID! name: String! power: String! image: String! race: String!): Character!
    deleteCharacter(name: String!): Boolean!
  }
  type Subscription {
    newCharacter: Character
    oldCharacter: String
  }`;
export default typeDefsCharacter;
