const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
    foreignKey: 'author_id',
});

Blog.belongsTo(User, {
    foreignKey: 'author_id',
});

module.exports = { User, Blog };
