import getTokenMiddleware from "../middleware/get_token.middleware.js";
import tokenGeneration from "../utils/token_generation.utils.js";
import { Router } from "express";

const user_info = {
  username : 'niranjan patil',
  password : 12345,
  email : 'nira1811@gmail.com'
};

const get_token_route = Router();

get_token_route.route('').get(getTokenMiddleware, (req, res) => {
  // const token = tokenGeneration(user_info);
  // return res.status(200).send(token);
  return res.json(
    {
      ans : 'hi'
    }
  );
});

export default get_token_route;