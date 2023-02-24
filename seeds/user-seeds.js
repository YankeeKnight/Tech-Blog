const { User } = require('../models');

const userData = [
    {
        username: 'Nic',
        password: 'columbianWonder'
    },
    {
        username: 'BKzDoncella',
        password: 'wherebkat'
    },
    {
        username: 'Poloche',
        password: 'incito'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;