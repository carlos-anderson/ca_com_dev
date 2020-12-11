
const DataLoader = require('dataloader');

const Post = require('../../models/post');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const postLoader = new DataLoader((postIds) => {
  return posts(postIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({ _id: { $in: userIds }});
});

const posts = async postIds => {
  try {
    const posts = await Post.find({ _id: { $in: postIds } });
    posts.sort((a, b) => {
      return (
        postIds.indexOf(a._id.toString()) - postIds.indexOf(b._id.toString())
      );
    });
    return posts.map(post => {
        return transformPost(post);
    });
  } catch (err) {
    throw err;
  }
};

const singlePost = async postId => {
  try {
    const post = await postLoader.load(postId.toString());
    return post;
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await userLoader.load(userId.toString());
    return {
      ...user._doc,
      _id: user.id,
      createdPosts: () => postLoader.loadMany(user._doc.createdPosts)
    };
  } catch (err) {
    throw err;
  }
};

const transformPost = post => {
  return {
    ...post._doc,
    _id: post.id,
    date: dateToString(post._doc.date),
    author: user.bind(this, post.author)
  };
};

const transformComment = comment => {
  return {
    ...comment._doc,
    _id: comment.id,
    user: user.bind(this, comment._doc.user),
    post: singlePost.bind(this, comment._doc.post),
    createdAt: dateToString(comment._doc.createdAt),
    updatedAt: dateToString(comment._doc.updatedAt)
  };
};

exports.transformPost = transformPost;
exports.transformComment = transformComment;

//exports.posts = posts;
//exports.singlePost = singlePost;
//exports.user = user;