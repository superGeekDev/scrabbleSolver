const express = require('express');
const {wordsController} = require("../api/wordsGenerator/controller");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ message: '' })
});

router.get('/words', wordsController);


module.exports = router;
