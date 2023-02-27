const { Post } = require('../models');

// seeds post portion of database
const postData = [
    {
        title: 'Story Grooming',
        content: 'Grooming for JIRA story number 123 in Epic 1, concerning the amount of sneakers that can fit on the website page',
        user_id: 1
    },
    {
        title: 'AirPods Max',
        content: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.',
        user_id: 2
    },
    {
        title: 'HomePod',
        content: 'Get 6 months of Apple Music free with your HomePodfootnote*',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;