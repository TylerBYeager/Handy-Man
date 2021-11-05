const { Vendor, Category, Review, Pending, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.render("homepage", {loggedIn : req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", (req, res) => {
  try {
    res.render("search", {loggedIn : req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render("login-choice");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login/user", (req, res) => {
  try {
    res.render("user-login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login/vendor", (req, res) => {
  try {
    res.render("vendor-login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up/", (req, res) => {
  try {
    res.render("signup-choice");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up/user", (req, res) => {
  try {
    res.render("user-signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sign-up/vendor", (req, res) => {
  try {
    res.render("vendor-signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/contact-us", (req, res) => {
  try {
    res.render("contact-us", {loggedIn : req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/profile/:id", async (req, res) => {
      try {
        const vendorData = await Vendor.findByPk(req.params.id, {
          include:[
            {
              model: Category,
              attributes: ["name"]
            },
            {
              model: Review,
              attributes: ["review_text"]
            },
            {
              model: Pending,
              attributes: ["name"]
            }
          ],
        })
        
        const vendor_info = vendorData.get({plain: true})
        console.log(vendor_info)

        res.render("vendor-profile", {vendor_info, loggedIn : req.session.loggedIn });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/vendor-dashboard/:id", async (req, res) => {
  try {
    const vendorData = await Vendor.findByPk(req.params.id, {
      include:[
        {
          model: Category,
          attributes: ["name"]
        },
        {
          model: Review,
          attributes: ["review_text"]
        },
        {
          model: Pending,
          attributes: ["name"]
        }
      ],
    })
    
    const vendor_info = vendorData.get({plain: true})
    console.log(vendor_info)

    res.render("vendor-profile", {vendor_info, loggedIn : req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/user-dashboard/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include:[
        {
          model: Pending
        }
      ],
    })
    
    const vendor_info = userData.get({plain: true})
    console.log(userData)

    res.render("user-dashboard", {userData, loggedIn : req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;