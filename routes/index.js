// import modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Middleware
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

// export router
module.exports = router;