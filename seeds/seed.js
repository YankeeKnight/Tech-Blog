const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const sequelize = require('../config/connection');

// function to fully seed database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedDatabase();

