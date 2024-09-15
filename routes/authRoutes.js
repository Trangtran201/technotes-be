const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const loginLimmiter = require('../middleware/loginLimitter')

router.route('/').
post(loginLimmiter, authController.login)
router.route('/refresh').get(authController.refresh)
router.route('/logout').post(authController.logout)

module.exports = router;