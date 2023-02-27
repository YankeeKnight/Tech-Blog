const { User } = require('../models');

// seeds user portion of database
const userData = [
    {
        username: 'Nic',
        email: "nic.col@aol.com",
        password: 'columbianWonder'
    },
    {
        username: 'BKzDoncella',
        email: "bkzdoncella87@aol.com",
        password: 'wherebkat'
    },
    {
        username: 'Poloche',
        email: "soytupoloche@aol.com",
        password: 'incito'
    }

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;