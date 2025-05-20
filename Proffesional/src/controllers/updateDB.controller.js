import { student } from "../models/first.model.js";

async function updateDatabase() {
  try {
    const result = await student.updateOne({username: 'niranjan patil'}, {$set: {username: 'Niranjan Patil'}});
    
    if (result.matchedCount === 0) {
      console.log('Can not upate inputes because not found');
    }
    else {
      console.log('Done');
    }
  }
  catch (error) {
    console.log(error);
  }
}

export { updateDatabase };