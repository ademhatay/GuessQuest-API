const { generateRandomNumber } = require('../controller/randomNumber');

const router = require('express').Router();

router.post('/random-number', generateRandomNumber);

module.exports = router;
