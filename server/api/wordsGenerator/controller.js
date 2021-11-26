const {generateVariants} = require("./service");

exports.wordsController = async function(req, res) {
  const {letters} = req.params;
  const data = await generateVariants(letters);
  res.status(200).send({ data })
}
