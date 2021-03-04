import bcript from "bcryptjs";
import jwt from "jsonwebtoken";
import { validateLoginInputs, validationRegisterInputs } from "../errors/user";
import User from "../models/User";

const generateToken = ({ id, email, username }) =>
  jwt.sign(
    {
      id: id,
      email: email,
      username: username,
    },
    process.env.SECRET,
    { expiresIn: "24 days" }
  );
const createUserInDB = async ({
  username,
  passsword,
  confirmPassword,
  email,
}) => {
  const _password = (await bcript.hash(passsword, 12)).toString();
  const newUser = User({
    username,
    password: _password,
    email,
    createdAt: new Date().toISOString(),
  });
  const res = await newUser.save();
  const token = generateToken({ id, email, username });
  return {
    ...res._doc,
    id: res._id,
    token,
  };
};

const existUserInDB = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error(`Usuario ya registrado`);
  }
};
export default {
  Mutation: {
    createUser: async (_, { registerInput }) => {
      const { email } = registerInput;
      await existUserInDB(email);
      const { error, hasErrors } = validationRegisterInputs(registerInput);
      if (hasErrors) {
        throw new Error(error);
      }
      return await createUserInDB(registerInput);
    },
    login: async (_, { username, passsword }) => {
      const { error, hasErrors } = validateLoginInputs({ username, passsword });
      if (hasErrors) {
        throw new Error(error);
      }
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("Usuario no existente");
      }
      const {
        _id: id,
        username: usernameDB,
        email,
        password: passwordDB,
      } = user;
      const isCorrectPassword = await bcript.compare(passsword, passwordDB);
      if (!isCorrectPassword) {
        throw new Error("Contraseña erronea");
      }
      const token = generateToken({ id, email, username: usernameDB });
      return {
        ...user._doc,
        id,
        token,
      };
    },
  },
};
