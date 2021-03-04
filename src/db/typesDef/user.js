const typesDefUser = `
  type User{
    id: ID!
    username: String!
    passsword: String! 
    email: String!
    token: String!
    createdAt: String!
   }
  input RegisterInput{
    username: String!
    passsword: String! 
    confirmPassword: String! 
    email: String! 
  }

 `;
const mutationUser = `
    createUser (registerInput: RegisterInput): User!
    login (username: String!, passsword: String!): User!
 `;
export { typesDefUser, mutationUser };
