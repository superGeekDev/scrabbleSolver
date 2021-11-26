const {generateVariants} = require("./service");

exports.wordsController = async function(req, res) {
  const letters = req.query.letters;
  const data = await generateVariants(letters);
  res.status(200).send({ data })
}
