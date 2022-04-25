const router = require('express').Router();
const controller = require('../controller/review');

router.get('/:user_id', controller.get); // review 조회
router.post('/:user_id', controller.post); // reveiew 생성
router.delete('/:user_id', controller.delete); // reveiw 삭제

module.exports = router;