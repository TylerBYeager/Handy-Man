const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  try {
    res.render("search");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login-choice");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/contact-us", (req, res) => {
  try {
    res.render("contact-us");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
