const router = require('express').Router();
const controller = require('../controller/user');

router.get('/:id', controller.get); // 회원정보조회

module.exports = router;