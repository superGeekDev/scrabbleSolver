const {generateVariants} = require("../services/wordsService");

exports.wordsController = async function(req, res) {
    const {letters} = req.body;
    const data = await generateVariants(letters);
    res.status(200).send({ data })
}
