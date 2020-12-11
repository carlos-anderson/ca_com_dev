const bcrypt = require('bcryptjs');

const Post = require('../../models/post');
const User = require('../../models/user');
const Comment = require('../../models/comment');
const { dateToString } = require('../../helpers/date');

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
    }
}

const posts = async postIds => {
    try {
        const posts = await Post.find({ _id: { $in: postIds } });
        return posts.map(post => {
            return transformPost(post);
        });
    }   catch (err) {
        throw err;
    }
};

const singlePost = async postId => {
    try {
        const post = await Post.findById(postId);
        return transformPost(post);
    } catch (err) {
        throw err;
    }
};

const user = async userId => {
    try {
        const user = await User.findById(userId);
            return {
                ...user._doc,
                _id: user.id,
                createdPosts: posts.bind(this, user._doc.createdPosts)
            };
    } catch(err) {
        throw err;
    }
};

module.exports = {
    posts: async () => {
        try {
            const posts = await Post.find();
            return posts.map(post => {
                return transformPost(post);
            });
        } catch (err) {
            throw err;
        }
    },
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

    createPost: async (args) => {
        const post = new Post({
            title: args.postInput.title,
            description: args.postInput.description,
            category: args.postInput.category,
            date: new Date(args.postInput.date),
            image: args.postInput.image,
            body: args.postInput.body,
            likes: args.postInput.likes,
            comments: args.postInput.comments,
            author: '5f28e07c1344064690c160ca',
        });
        let createdPost;
        try {
            const result = await post.save();
            createdPost = transformPost(result);
            const author = await User.findById('5f28e07c1344064690c160ca');

            if (!author) {
                throw new Error('User not found.');
            }
            author.createdPosts.push(post);
            await author.save();

            return createdPost;
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    createUser: async args => {
        try {
            const existingUser = await User.findOne({ email: args.userInput.email })

            if (existingUser) {
                throw new Error('User already exists.');
            }
            const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

            const user = new User({
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await user.save();

            return { ...result._doc, password: null, _id: result.id }

        } catch (err) {
            throw err;
        }

    },
    postComment: async args => {
            const fetchedPost = await Post.findOne({ _id: args.postId });
            const comment = new Comment({
                user: '5f28e07c1344064690c160ca',
                post: fetchedPost,
                title: args.title,
                message: args.message
            });
        const result = await comment.save();
        return transformComment(result);
        },
        deleteComment: async args => {
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