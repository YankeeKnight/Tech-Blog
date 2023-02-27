const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// sets relationships between models in the database
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: "cascade"
});

module.exports = { Comment, Post, User };
