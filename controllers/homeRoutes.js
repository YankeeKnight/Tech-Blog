const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    //TODO: Get all projects and JOIN with user data.
    //TODO: Serialize data so the template can read it. 
    //TODO: Pass serialized data and session flag into homepage template.
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name', 'email'],
                },
            ],
        });

        const projects = projectData.map((project) =>
            project.get({ plain: true })
        );

        res.render('homepage', { projects, });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/project/:id', async (req, res) => {
    //TODO: Get individual project and JOIN with user data.
    //TODO: Serialize data so the template can read it.
    //TODO: Pass serialized data and session flag into project template.
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name', 'email'],
                },
            ],
        });
        const projects = projectData.get({ plain: true });
        res.render('project', { project });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    //TODO: Find the logged in user based on the session ID
    //TODO: Serialize data so the template can read it.
    //TODO: Pass serialized data into profile template.
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render('homepage', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    //TODO: If the user is already logged in, redirect the request to another route.
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;
