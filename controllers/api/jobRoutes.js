const router = require('express').Router();
const {Jobs} = require('../../models');

// View jobs by job title
router.get('/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

// View vendor by job title
router.get('/vendor/:id', async (req, res) => {
    try {
      
    }catch(err){
      res.status(500).json(err)
    }
});

module.exports = router;
  