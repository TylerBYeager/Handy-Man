const router = require('express').Router();
const {Category} = require('../../models');

// View jobs by category
router.get('/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// View vendors by Category
router.get('/vendor/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});


module.exports = router;
  