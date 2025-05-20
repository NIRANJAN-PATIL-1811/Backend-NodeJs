import { student } from "../models/first.model.js";

async function checkDatabase() {
  const result = new student({
    username:'niranjan patil',
    password: 12345
  });

  await result.save();

  if (result) {
    console.log('done');
  }
  else {
    console.log('not done');
  }
}

async function retriveData() {
  const ans = await student.findOne({username:'kabir patil'});
  if (ans) {
    console.log(ans);
  }
  else {
    console.log('Can not find');
  }
}

export { checkDatabase, retriveData };