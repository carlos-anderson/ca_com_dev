const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
{
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);

