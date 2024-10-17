const express = require('express');
const router = express.Router();

const SiteController = require('../controllers/SiteController');

router.get('/users',SiteController.getUserList),
router.post('/users',SiteController.createUser),
router.get('/index',SiteController.showView),

module.exports =  router;                                                                                                                                                                                                                                                                                     ;
