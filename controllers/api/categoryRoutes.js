const router = require('express').Router();
const {Category, Vendor} = require('../../models');

// View all category
router.get('/', async (req, res) => {
  try {
    const Data = await Category.findAll({});
    res.status(200).json(Data)
  }catch(err){
    res.status(500).json(err)
  }
});

// View vendors by Category ID
router.get('/vendor/:id', async (req, res) => {
    try {
      const Data = await Category.findByPk(req.params.id, {
        include: [{model:Vendor}]
      });
      res.status(200).json(Data)
    }catch(err){
      res.status(500).json(err)
    }
});

// create a new category
// {name: }
router.post('/', async (req, res) => {
  try {
    const Data = await Category.create(req.body);
    res.status(200).json(Data);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
  