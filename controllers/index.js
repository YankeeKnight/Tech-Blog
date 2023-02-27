const router = require('express').Router();

// defining api routes for use
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

// set up to use routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
