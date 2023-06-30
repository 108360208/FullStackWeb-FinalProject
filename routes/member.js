var express = require('express');
var router = express.Router();

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


const MemberModifyMethod = require('../controllers/modify_controller');

memberModifyMethod = new MemberModifyMethod();
router.get('/logout',memberModifyMethod.postLogout)
router.post('/register', memberModifyMethod.postRegister);
router.post('/login', memberModifyMethod.postLogin);
router.get('/ranking/1',memberModifyMethod.ranking)
router.get('/ranking/2',memberModifyMethod.ranking1) 
router.get('/game/1',memberModifyMethod.Game1start)
router.get('/game/2',memberModifyMethod.Game2start)
router.get('/register',memberModifyMethod.getregister)
router.get('/login',memberModifyMethod.getlogin)
router.post('/leaderboard',memberModifyMethod.upload)
module.exports = router;
