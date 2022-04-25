const router = require('express').Router();
const controller = require('../controller/review');

router.get('/:userId', controller.get); // review 조회
router.post('/:userId', controller.post); // reveiew 생성
router.delete('/:userId', controller.delete); // reveiw 삭제

module.exports = router;