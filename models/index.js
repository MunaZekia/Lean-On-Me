// require models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Opportunity = require('./Opportunity');

// allow users to many many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// posts belong to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});
// comment can only belong to one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
// comment belongs to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
// user allow to make many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
});
// user allowed to make many posts
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});
// Opportunity belongs to user
Opportunity.belongsTo(User, {
    foreignKey: 'user_id'
});

// user can create many opportunities
User.hasMany(Opportunity, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, Comment, Opportunity };