const ShortLink = require("../models/shortlinks");
const { nanoid } = require("nanoid");
exports.root = (req, res) => {
  return res.status(200).json({
    message: "UP AND RUNNING!!",
  });
};

exports.newlink = async (req, res, next) => {
  let { link, shortid } = req.body;
  try {
    if (!shortid) {
      while (1) {
        shortid = nanoid(6);
        let ch = /^[a-z0-9]+$/.test(shortid[0]);
        if (!ch) continue;
        const check = await ShortLink.findOne({ shortid });
        if (!check) break;
      }
    } else {
      const check = await ShortLink.findOne({ shortid });
      if (check) {
        return res.status(409).json({
          error: "Short ID already used.",
        });
      }
    }
    const newLink = new ShortLink({ link, shortid });
    newLink.save((err, shortlink) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "Server Error",
        });
      }

      return res.status(200).json({
        shortid: shortlink.shortid,
        mainlink: shortlink.link,
      });
    });
  } catch {
    next();
  }
};

exports.getlink = (req, res) => {
  let shortid = req.body.shortid;
  ShortLink.findOne({ shortid }, (err, shortlink) => {
    if (err || !shortlink) {
      return res.status(400).json({
        error: "Invalid URL",
      });
    }

    return res.status(200).json(shortlink.link);
  });
};
