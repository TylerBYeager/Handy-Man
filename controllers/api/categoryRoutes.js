const router = require('express').Router();
const {Category, Vendor} = require('../../models');

// View all category
router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({});
    res.status(200).json(data)
  }catch(err) {
    res.status(500).json(err)
  }
});

// View vendors by Category ID
router.get('/vendor/:id', async (req, res) => {
    try {
      const data = await Category.findByPk(req.params.id, {
        include: [{model:Vendor}]
      });
      if (!data) {
        res.status(404).json("Category doesn't exist");
      } else {
        res.status(200).json(data)
      }
    }catch(err) {
      res.status(500).json(err)
    }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
  