const router = require('express').Router();
const { Vendor, Pending, Category } = require('../../models');

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

  } catch (err) {
    res.status(500).json(err)
  }
});

// Vendor Log Out
router.post('/logout', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err)
  }
});

// View vendor by ID
router.get('/:id', async (req, res) => {
  try {

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
