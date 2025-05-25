import relation_post_mong from '../models/relation.post.model.js'
import relation_user_mong from '../models/relation.user.model.js';

async function relationUserFun() {
  try {
    const user = new relation_user_mong({
      username: 'niranjan patil',
      age: 24
    });

    await user.save();
    return user;
  }
  catch (error) {
    console.log(error);
  }
}

async function relationPostFun() {
  try {
    const user = await relation_user_mong.findOne({username:'niranjan patil'});
    const post = new relation_post_mong({
      title: 'My Story',
      body: 'This is first page of my story book',
      user_info: user._id
    });

    await post.save();
  }
  catch (error) {
    console.log(error);
  }
}


async function relationGetFun() {
  try {
    const result = await relation_post_mong.find().populate('user_info').lean();
    console.log(result);
    return result;
  }
  catch (error) {
    console.log(error);
  }
}

export { relationUserFun, relationPostFun, relationGetFun };