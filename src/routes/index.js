const router = require('express').Router();

router.use('/mods', require('./mods'));
router.use('/generate', require('./generate'));


module.exports = router;
