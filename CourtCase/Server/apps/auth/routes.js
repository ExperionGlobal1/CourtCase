const controller = require('./controllers/authController');
const router = require('express').Router();

router.post('/login', controller.login);
router.get('/test', controller.test);

module.exports = router;