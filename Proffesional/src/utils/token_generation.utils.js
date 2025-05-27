import jwt from "jsonwebtoken";

function tokenGeneration(user_info) {
  const generated_token = jwt.sign({user_info}, process.env.SECRET_KEY, { expiresIn : '10s' });
  return generated_token;
}

export default tokenGeneration;