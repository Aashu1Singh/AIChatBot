import jwt from "jsonwebtoken";

export function createToken(id: String, email: String, expires) {
  const payload = {
    id,
    email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expires,
  });

  return token;
}
