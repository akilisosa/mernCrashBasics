const express = require('express');
const router = express.Router();

// @route    GET  api/post
// @desc     Test route
// @acess    Public
router.get('/', (req, res) => res.send('posts route'));

module.exports = router;