const express = require('express');
const router = express.Router();

// require candidateRoutes
router.use(require('./candidateRoutes'));

// require partyRoutes
router.use(require('./partyRoutes'));

// require voterRoutes
router.use(require('./voterRoutes'));

module.exports = router;