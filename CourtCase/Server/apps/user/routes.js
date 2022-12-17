const controller = require('./controllers/homeController');
const router = require('express').Router();

router.get('/', controller.home);

module.exports = router;