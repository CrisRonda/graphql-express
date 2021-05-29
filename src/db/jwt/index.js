import jwt from "jsonwebtoken";
const secret = process.env.SECRET;
export const generateToken = ({ id, email, username }) =>
  jwt.sign(
    {
      id: id,
      email: email,
      username: username,
    },
    secret,
    { expiresIn: "24 days" }
  );

export const verifyToken = (context) => {
  const { authorization } = context.request.headers;
  if (authorization) {
    const token = authorization.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, secret);
        return user;
      } catch (error) {
        throw new Error("Token invalido/expirado");
      }
    }
    throw new Error("Token de autenticación vacío");
  }
  throw new Error("Authorization header no encontrada");
};
