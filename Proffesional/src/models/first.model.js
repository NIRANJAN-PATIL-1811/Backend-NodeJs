import { mongoose } from "../db/mydb.db.js";

const myschema = new mongoose.Schema({
  username: String,
  password: Number
});

const student = new mongoose.model('personal', myschema);

export { student };