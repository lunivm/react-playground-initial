const express = require('express');
const featuredRouter = require('./featured');
const todosRouter = require('./todos');

const router = express.Router();

router.use('/featured', featuredRouter)
router.use('/todos', todosRouter)

module.exports = router;
