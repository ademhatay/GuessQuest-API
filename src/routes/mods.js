const router = require('express').Router();


// return mods list from ../constants/index.js
router.get('/', (req, res) => {
    res.json(require('../constants').MODS);
});


module.exports = router;
