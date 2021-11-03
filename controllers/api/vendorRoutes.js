const router = require('express').Router();
const { Vendor, Pending, Review, Category } = require('../../models');

// Vendor Sign Up
router.post('/', async (req, res) => {
  try {
    const newVendor = await Vendor.create(req.body);

    req.session.save(() => {
      req.session.user_id = newVendor.id;
      req.session.loggedIn = true;
      res.json(newVendor);
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

// Vendor Log In
router.post('/login', async (req, res) => {
  try {
    const vendorData = await Vendor.findOne({ where: { email: req.body.email } });
    if (!vendorData) {
      res.status(400).json({ message: "Incorrect email or password. Try again" });
      return;
    }

    const validPassword = await vendorData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email or password. Try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = vendorData.id;
      req.session.loggedIn = true;

      res.json({ vendor: vendorData, message: "Successfully logged in!" });
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

// Vendor Log Out
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// View vendor by ID
router.get('/:id', async (req, res) => {
  try {
    const oneVendor = await Vendor.findOne(
      {
        attributes: { exclude: ["password"] },
        where: { id: req.prarms.id },
        include: [{
          model: Category,
          attributes: ["name"]
        },
        {
          model: Review,
          attributes: ["review_text", "date", "user_id", "vendor_id", "pending_id"]
        }
        ]
      });
    if (!oneVendor) {
      res.status(404).json("Vendor doesn't exist");
    } else {
      res.status(200).json(oneVendor);
    }
  } catch (err) {
    res.status(500).json(err)
  }
});


// View pending jobs by Vendor
router.get('/pending', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err)
  }
});

// View pending jobs by ID
router.get('/pending/:id', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err)
  }
});

// Approve job request
router.put('/approve/:id', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
