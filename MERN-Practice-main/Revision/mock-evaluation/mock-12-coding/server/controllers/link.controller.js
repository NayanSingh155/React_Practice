const ShortUrl = require("../models/link.model");

module.exports.createShortUrl = async (req, res, next) => {
  try {
    if (req.body.customUrl == ""){
      let r=  await ShortUrl.create({ full: req.body.yourUrl });
     return  res.json(r)
    }
    else
      await ShortUrl.create({
        full: req.body.yourUrl,
        short: req.body.customUrl,
      });
  } catch (error) {
    next(error);
  }
};

module.exports.gotUrl = async (req, res, next) => {
  try {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shrinkedUrl });
    if (!shortUrl) return res.sendStatus(404);
    res.redirect(shortUrl.full);
  } catch (error) {
    next(error);
  }
};
