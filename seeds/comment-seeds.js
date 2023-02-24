const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Send it in cuz I'm ready to conquer",
        user_id: 1,
        post_id: 1

    },
    {
        comment_text: "Se puede hablar en espanol aqui?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Go Yankees!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;