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

router.get("/", async (req, res) => {
  try {
    const vendorData = await Vendor.findAll(
      {
        attributes: { exclude: ["password" ]}
      });
    res.status(200).json(vendorData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// View vendor by ID
router.get('/:id', async (req, res) => {
  try {
    const oneVendor = await Vendor.findOne(
      {
        attributes: { exclude: ["password"] },
        where: { id: req.params.id },
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
router.get('/:vendor_id/pending', async (req, res) => {
    try {
      const Data = await Pending.findAll({
        where:{vendor_id:req.params.vendor_id}
      });
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

// View pending jobs by ID
router.get('/pending/:id', async (req, res) => {
    try {
      const Data = await Pending.findByPk(req.params.id);
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

// Approve job request
router.put('/approve/:pending_id', async (req, res) => {
    try {
      const Data = await Pending.update({approved:true}, {
        where:{
          id:req.params.pending_id,
        },
      })
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;
