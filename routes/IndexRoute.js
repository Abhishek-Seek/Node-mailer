const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/SiteController');

router.get('/',SiteController.index),
router.get('/login',SiteController.login),
router.get('/send',SiteController.sendEmail),

module.exports =  router;                                                                                                                                                                                                                                                                                     ;
