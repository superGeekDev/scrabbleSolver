const express = require('express');
const {wordsController} = require("../controllers/words");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ message: 'Hello World!' })
});

router.get('/words/:letters', wordsController);


module.exports = router;
