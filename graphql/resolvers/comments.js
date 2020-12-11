const Post = require('../../models/post');
const Comment = require('../../models/comment');
const { transformComment, transformPost } = require('./merge');

module.exports = {
    comments: async () => {
        try {
            const comments = await Comment.find();
            return comments.map(comment => {
                return transformComment(comment);
            });
        } catch (err) {
            throw err;
        }
    },
    postComment: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
        const fetchedPost = await Post.findOne({ _id: args.postId });
        const comment = new Comment({
            user: req.UserId,
            post: fetchedPost,
            title: args.title,
            message: args.message
        });
        const result = await comment.save();
        return transformComment(result);
    },
    deleteComment: async (args, req) => {
        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }
        try {
            const comment = await Comment.findById(args.commentId).populate('post');
            const post = transformPost(comment.post);
            await Comment.deleteOne({ _id: args.commentId });
            return post;
        } catch (err) {
            throw err;
        }
    }
};